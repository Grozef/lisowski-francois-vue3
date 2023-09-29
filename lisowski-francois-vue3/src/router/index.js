import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '../views/TheHome.vue'
import MonstersZbotw from '../views/MonstersZbotw.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheHome
    },
    {
      path: '/MonstersZbotw',
      name: 'MonstersZbotw',
      component: MonstersZbotw
    }
  ]
})

export default router
