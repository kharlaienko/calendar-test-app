import { createApp } from 'vue'
import Plugin from '@quasar/quasar-ui-qcalendar/src/QCalendarDay.js'
import './style.css'
import App from './App.vue'

createApp(App).use(Plugin).mount('#app')
