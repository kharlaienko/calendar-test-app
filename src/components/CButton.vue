<script setup>
   defineProps({ active: { type: Boolean, default: false } });
</script>

<template>
   <button :class="{ active: active }"><slot /></button>
</template>

<style scoped>
   button {
      padding: 0.5rem 1rem;
      border-radius: 4px;
   }
   button.active,
   button:hover {
      color: var(--primary);
   }

   .text-capitalize {
      text-transform: capitalize;
   }

   .text-uppercase {
      text-transform: uppercase;
   }
</style>
