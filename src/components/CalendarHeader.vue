<script setup>
   import CButton from "./CButton.vue";

   const DATE_CONTROLS = ["today", "back", "next"];

   defineEmits(["next", "back", "today"]);
   defineProps({
      title: { type: String, required: true },
      views: { type: Array, required: true },
   });

   const view = defineModel("view", { type: String });
</script>

<template>
   <div class="header-controls">
      <p class="text-big">Calendar View</p>
      <div class="controls">
         <c-button
            v-for="item in views"
            :key="item"
            @click="view = item"
            class="text-capitalize text-default"
            :active="view === item"
            >{{ item }}</c-button
         >
      </div>
   </div>

   <div class="header-controls view">
      <div class="controls">
         <c-button
            v-for="event in DATE_CONTROLS"
            :key="event"
            @click="$emit(event)"
            class="text-capitalize text-default"
            >{{ event }}</c-button
         >
      </div>

      <p class="text-big title">{{ title }}</p>
      <span></span>
   </div>
</template>

<style scoped>
   .controls {
      box-shadow: 0px 2px 3px #0000000d;
      border: 1px solid var(--control-group-border);
      border-radius: 4px;
   }

   .controls > *:nth-child(2n) {
      border-left: 1px solid var(--control-group-border);
      border-right: 1px solid var(--control-group-border);
      border-radius: 0;
   }

   .header-controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-bottom: 10px;
   }

   .header-controls.view {
      margin-bottom: 20px;
   }

   .header-controls.view .title {
      transform: translateX(-100%);
   }
</style>
