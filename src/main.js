import { createApp } from 'vue'
import './main.scss'
import App from './App.vue'
import {createRouter} from "vue-router"

const createRouter(: {
    history: createWebHistory(),
    routes: [
      {path: '/', name: 'Home', component: Home}
    ]
})

createApp(App)
.use(router)
.mount('#app')
