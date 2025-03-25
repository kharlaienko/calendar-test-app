<script setup>
   import CalendarDayItem from "./CalendarDayItem.vue";
   defineEmits(["droppped"]);

   const props = defineProps({ items: { type: Array, default: [] } });
</script>

<template>
   <div class="day" @drop="console.log(123)" dropzone="true" @dragover.prevent>
      <CalendarDayItem
         v-for="item in items"
         :key="item.id"
         :item="item"
         draggable="true"
         @dragstart="(e) => e.dataTransfer.setData('eventIndex', item.id)"
      />
   </div>
</template>

<style scoped>
   .day {
      height: 100%;
      width: 100%;
   }
</style>
