<script setup>
   import { reactive, watchEffect } from "vue";
   import CrossIcon from "../assets/icons/circle-cross.svg";
   import CButton from "./CButton.vue";

   const emit = defineEmits(["close", "confirm"]);
   const props = defineProps({
      isEdit: { type: Boolean, default: false },
      item: { type: Object },
   });

   const formData = reactive({
      title: null,
      time: null,
      start: null,
      color: null,
   });

   const confirm = () => {
      const newTime = new Date(`${formData.start}T${formData.time}:00Z`);
      emit("confirm", {
         ...props.item,
         start: newTime,
         end: newTime.setHours(newTime.getHours() + 1),
         title: formData.title,
         bgColor: formData.color,
      });
      emit("close");
   };

   watchEffect(() => {
      if (props.item) {
         formData.color = props.item.bgColor;
         formData.title = props.item.title;
         formData.start = props.item.start.toISOString().substr(0, 10);
         formData.time = props.item.start.toISOString().substr(11, 5);
      }
   });
</script>

<template>
   <form class="form" @submit.prevent="confirm">
      <button class="close" @click="$emit('close')">
         <component :is="CrossIcon" />
      </button>
      <input
         v-model="formData.title"
         minlength="3"
         maxlength="30"
         required
         type="text"
         placeholder="Event name"
      />
      <input v-model="formData.start" type="date" placeholder="Event date" />
      <input v-model="formData.time" type="time" placeholder="Event time" />
      <input v-model="formData.color" type="color" />

      <div class="controls">
         <c-button class="btn-cancel" @click="$emit('close')">{{
            isEdit ? "DISCARD" : "Cancel"
         }}</c-button>
         <c-button class="btn-confirm" type="submit">{{
            isEdit ? "EDIT" : "Save"
         }}</c-button>
      </div>
   </form>
</template>

<style scoped>
   .form {
      width: 100%;

      max-width: 200px;
      padding: 10px;
      padding-bottom: 0;
      padding-top: 0;
      margin: 0 auto;

      background: white;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #43425d;
      border-radius: 10px;
   }

   .close {
      display: block;
      margin-left: auto;
   }

   input {
      width: 100%;
      margin-bottom: 15px;
      border: none;
      border-bottom: 1px solid #d6d6d6;
      padding: 5px;
   }

   .controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
   }

   .btn-confirm {
      color: var(--secondary);
   }

   .btn-confirm:hover {
      color: var(--secondary);
   }

   .btn-cancel {
      color: var(--red);
   }
   .btn-cancel:hover {
      color: var(--red);
   }

   .btn-confirm:hover,
   .btn-cancel:hover {
      filter: brightness(85%);
   }
</style>
