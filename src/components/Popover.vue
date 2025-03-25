<template>
   <div
      class="popover-container"
      ref="activator"
      v-if="!props.activator"
      @click.stop="togglePopover($event)"
   >
      <slot name="activator" :togglePopover="togglePopover"></slot>
   </div>
   <Teleport to="body">
      <div v-if="visible" ref="popover" class="popover" :style="popoverStyle">
         <slot></slot>
      </div>
   </Teleport>
</template>

<script setup>
   import { ref, watch, nextTick, defineProps, onBeforeUnmount } from "vue";

   const props = defineProps({
      activator: { type: HTMLElement, default: null },
      noActivator: { type: Boolean, default: false },
   });

   const visible = ref(false);
   const activator = ref(null);
   const popover = ref(null);
   const popoverStyle = ref({});

   const togglePopover = async (event) => {
      visible.value = !visible.value;
      if (visible.value) {
         await nextTick();
         positionPopover(event);
         window.addEventListener("click", outsideClickHandler);
      } else {
         window.removeEventListener("click", outsideClickHandler);
      }
   };

   const positionPopover = (event) => {
      const activatorEl = !props.noActivator
         ? props.activator || activator.value
         : event.target;

      if (!popover.value || !activatorEl) return;

      const popoverRect = popover.value.getBoundingClientRect();
      const activatorRect = activatorEl.getBoundingClientRect();

      let left = activatorRect.left;
      let top = activatorRect.bottom + 10;

      if (top + popoverRect.height > window.innerHeight) {
         top = activatorRect.top - popoverRect.height - 10;
      }

      if (left + activatorRect.width > window.innerWidth) {
         left = window.innerWidth - activatorRect.width;
      }

      popoverStyle.value = {
         left: `${left}px`,
         top: `${top}px`,
         "min-width": `${activatorRect.width}px`,
         position: "absolute",
      };
   };

   const outsideClickHandler = (event) => {
      const activatorEl = props.activator || activator.value;
      if (
         popover.value &&
         !popover.value.contains(event.target) &&
         !activatorEl.contains(event.target)
      ) {
         visible.value = false;
         window.removeEventListener("click", outsideClickHandler);
      }
   };

   const bindActivator = () => {
      if (props.activator) {
         props.activator.addEventListener("click", togglePopover);
      }
   };

   const unbindActivator = () => {
      if (props.activator) {
         props.activator.removeEventListener("click", togglePopover);
      }
   };

   watch(
      () => props.activator,
      (newVal, oldVal) => {
         if (oldVal) unbindActivator();
         if (newVal) bindActivator();
      },
      { immediate: true }
   );

   onBeforeUnmount(() => {
      unbindActivator();
      window.removeEventListener("click", outsideClickHandler);
   });

   defineExpose({ togglePopover });
</script>

<style scoped>
   .popover {
      z-index: 99999;
   }
</style>
