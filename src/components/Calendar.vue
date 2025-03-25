<script setup>
   import { ref, computed, nextTick } from "vue";
   import { VueCal } from "vue-cal";
   import "vue-cal/style";
   import CalendarHeader from "./CalendarHeader.vue";
   import { generateCalendarTitle } from "../helpers/calentarTitle";
   import CalendarDayItem from "./CalendarDayItem.vue";
   import Popover from "./Popover.vue";
   import EventForm from "./EventForm.vue";

   const events = ref([]);

   const popover = ref();
   const vueCel = ref();

   const editElement = ref();

   const viewMode = ref("month");

   const currentDate = ref(new Date());

   const views = ["month", "week", "day", "agenda"];

   const createEvent = (event) => {
      editElement.value = {
         id: Math.floor(Math.random() * 1000),
         start: event.cell.start,
         end: new Date(event.cell.end.setHours(event.cell.end.getHours() + 1)),
         draggable: true,
         background: false,
      };
      popover.value.togglePopover(event.e);
   };

   const addNewEvent = (data) => {
      events.value.push(data);
   };

   const updateEvent = (data) => {
      const indexOfElem = events.value.findIndex((el) => el.id === data.id);
      if (indexOfElem != -1) {
         const res = events.value.toSpliced(indexOfElem, 1, data);
         events.value = [];

         nextTick(() => (events.value = res)); //To trigger update events
      }
   };

   const formattedDate = computed(() => {
      if (!currentDate.value) return "";
      return generateCalendarTitle(viewMode.value, currentDate.value);
   });

   const goToToday = () => {
      vueCel.value.view.goToToday();
   };

   const goToNext = () => {
      vueCel.value.view.next();
   };

   const goToPrevious = () => {
      vueCel.value.view.previous();
   };
</script>

<template>
   <div class="calendar-box">
      <h2 class="text-big-2 font-normal">Calendar</h2>

      <vue-cal
         ref="vueCel"
         class="custom-calendar card"
         :selected-date="currentDate"
         :events="events"
         :view="viewMode"
         :events-on-month-view="viewMode === 'month'"
         :views="views"
         :editable-events="{
            drag: true,
            resize: true,
            delete: true,
            create: true,
         }"
         @cell-dblclick="createEvent"
         start-week-on-sunday
      >
         <template #header>
            <calendar-header
               @today="goToToday"
               @back="goToPrevious"
               @next="goToNext"
               v-model:view="viewMode"
               :title="formattedDate"
               :views="views"
            />
         </template>
         <template #event="props">
            <calendar-day-item
               :item="props"
               @updated="updateEvent({ ...props.event, ...$event })"
            />
         </template>
      </vue-cal>

      <Popover ref="popover" :no-activator="true">
         <event-form
            @close="popover.togglePopover()"
            :item="editElement"
            @confirm="addNewEvent"
         />
      </Popover>
   </div>
</template>

<style scoped>
   .calendar-box {
      height: 100%;
      display: flex;
      flex-direction: column;
   }
   .card {
      padding: 20px;
      flex: 1 1 auto;
   }
</style>
