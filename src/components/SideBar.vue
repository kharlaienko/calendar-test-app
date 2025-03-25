<script setup>
   import HomeIcon from "../assets/icons/home.svg";
   import CenterIcon from "../assets/icons/center.svg";
   import InvoicesIcon from "../assets/icons/invoices.svg";
   import MailIcon from "../assets/icons/mail.svg";
   import SettingsIcon from "../assets/icons/settings.svg";

   const menuItems = [
      {
         text: "Home",
         icon: HomeIcon,
         active: false,
      },
      {
         text: "Dashboard",
         icon: SettingsIcon,
         active: false,
      },
      {
         text: "Inbox",
         icon: MailIcon,
         active: false,
      },
      {
         text: "Products",
         icon: HomeIcon,
         active: false,
      },
      {
         text: "Invoices",
         icon: InvoicesIcon,
         active: false,
      },
      {
         text: "Customers",
         icon: MailIcon,
         active: false,
      },
      {
         text: "Chat Room",
         icon: InvoicesIcon,
         active: false,
      },
      {
         text: "Calendar",
         icon: SettingsIcon,
         active: true,
      },
      {
         text: "Help Center",
         icon: CenterIcon,
         active: false,
      },
      {
         text: "Settings",
         icon: SettingsIcon,
         active: false,
      },
   ];
</script>

<template>
   <div class="sidebar">
      <div class="logo text-default-2">IMPEKABLE</div>
      <nav>
         <ul>
            <li
               v-for="item in menuItems"
               :key="item.text"
               :class="{ active: item.active }"
               class="menu-item text-default-2"
            >
               <component :is="item.icon || 'span'" class="icon" />
               {{ item.text }}
            </li>
         </ul>
      </nav>
   </div>
</template>

<style scoped>
   .sidebar {
      --sidebar-bg: #3b3b53;
      --menu-item-bg: #43425d;
      --menu-item-hover: #4a4260;
      --menu-item-active: #a3a0fb;
      --text-color: #fff;
      --icon-color: #a5a4bf;

      width: 100%;
      height: 100%;
      color: var(--text-color);

      background: var(--menu-item-bg);
   }

   .sidebar .logo {
      text-transform: uppercase;
      font-weight: bold;
      text-align: start;
      letter-spacing: 3px;
      background: var(--sidebar-bg);
      min-height: 70px;
      padding: 0 20px;
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
   }

   .sidebar nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
   }

   .sidebar .menu-item {
      display: flex;
      align-items: center;
      padding: 12px 20px;
      cursor: pointer;

      transition: background 0.3s ease;
   }

   .sidebar .menu-item:hover {
      background: var(--sidebar-bg);
   }

   .sidebar .menu-item.active {
      background: var(--sidebar-bg);
      border-left: 4px solid var(--menu-item-active);
      padding-left: 16px;
   }

   .sidebar .icon {
      margin-right: 11px;
      min-width: 20px;
      color: var(--icon-color);
   }

   .sidebar .menu-item svg.icon {
      fill: var(--icon-color);
   }

   .sidebar .menu-item.active svg.icon {
      fill: var(--menu-item-active);
   }
</style>
