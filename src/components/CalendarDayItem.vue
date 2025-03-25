<script setup>
   import { ref } from "vue";
   import Popover from "./Popover.vue";
   import EventForm from "./EventForm.vue";

   defineEmits(["updated"]);

   const props = defineProps({ item: { type: Object } });

   const activator = ref();

   const popover = ref();
</script>

<template>
   <div
      class="day-item text-default"
      :style="{ backgroundColor: item.event.bgColor }"
      ref="activator"
   >
      {{ item.event.title }}
      <Popover :activator="activator" ref="popover">
         <event-form
            :isEdit="true"
            :item="item.event"
            @close="popover.togglePopover()"
            @confirm="$emit('updated', $event)"
         />
      </Popover>
   </div>
</template>

<style scoped>
   .day-item {
      width: 100%;
      height: 100%;
   }
</style>
