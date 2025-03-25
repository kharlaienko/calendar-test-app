<script setup>
   import Calendar from "./components/Calendar.vue";
   import Header from "./components/Header.vue";
   import SideBar from "./components/SideBar.vue";
</script>

<template>
   <main>
      <aside>
         <side-bar />
      </aside>

      <div class="conetnt-container">
         <Header />
         <div class="content">
            <Calendar />
         </div>
      </div>
   </main>
</template>

<style scoped>
   main {
      height: 100svh;
      display: flex;
   }

   aside {
      max-width: 260px;
      width: 100%;
   }

   .conetnt-container {
      flex-grow: 1;
      width: 100%;

      display: grid;
      grid-template-rows: 70px 1fr;
   }

   .content {
      padding: 32px 75px 30px 75px;
   }
</style>
