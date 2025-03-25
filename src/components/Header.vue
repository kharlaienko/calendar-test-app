<script setup>
   import SearchIcon from "../assets/icons/search.svg";
   import CenterIcon from "../assets/icons/center.svg";
   import MessageIcon from "../assets/icons/message.svg";
   import BellIcon from "../assets/icons/bell.svg";
   import ArrowDownIcon from "../assets/icons/arrow-down.svg";
</script>

<template>
   <header class="header">
      <div class="search-bar">
         <component :is="SearchIcon" class="icon" />
         <input
            type="text"
            placeholder="Search transactions, invoices or help"
         />
      </div>

      <div class="header-icons">
         <component :is="CenterIcon" class="icon" />
         <component :is="MessageIcon" class="icon" />
         <div class="notification">
            <component :is="BellIcon" class="icon" />
            <span class="dot"></span>
         </div>
         <div class="divider"></div>
         <div class="user-profile">
            <span class="text-default">John Doe</span>
            <component :is="ArrowDownIcon" class="icon" />
            <img src="../assets/images/Avatar.png" alt="User Avatar" />
         </div>
      </div>
   </header>
</template>

<style scoped>
   .header {
      --header-bg: #fff;
      --header-height: 70px;
      --text-color: #606060;
      --border-color: #e0e0e0;
      --icon-color: #9c9c9c;
      --search-bg: #f7f7f7;
      --profile-text-color: #333;
   }

   .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--header-height);
      background: var(--header-bg);
      padding: 0 20px;
      border-bottom: 1px solid var(--border-color);
   }

   .search-bar {
      display: flex;
      align-items: center;

      padding: 8px 0;
      border-radius: 20px;
      width: 300px;
   }

   .search-bar .icon {
      color: var(--icon-color);
      margin-right: 10px;
   }

   .search-bar input {
      border: none;
      background: transparent;
      outline: none;
      width: 100%;
      color: var(--text-color);
   }

   .divider {
      height: 28px;
      width: 1px;
      background-color: #ebebf2;
   }

   .header-icons {
      display: flex;
      align-items: center;
      gap: 21px;
   }

   .header-icons .icon {
      fill: var(--icon-color);
      margin-inline: 7px;
   }

   .notification {
      position: relative;
   }

   .notification .dot {
      position: absolute;
      top: -2px;
      right: -2px;
      width: 6px;
      height: 6px;
      background: orange;
      border-radius: 50%;
   }

   .user-profile {
      display: flex;
      align-items: center;
      gap: 15px;
      cursor: pointer;
   }

   .user-profile .icon {
      margin-left: 5px;
   }

   .user-profile span {
      color: var(--profile-text-color);
   }

   .user-profile img {
      width: 38px;
      height: 38px;
      border-radius: 50%;
   }
</style>
