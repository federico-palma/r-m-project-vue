import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharactersView from '../views/CharactersView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/characters',
    name: 'characters',
    component: CharactersView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
