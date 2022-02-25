import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharactersView from '../views/CharactersView.vue'
import LocationsView from '../views/LocationsView.vue'
import EpisodesView from '../views/EpisodesView.vue'

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
  },
  {
    path: '/locations',
    name: 'locations',
    component: LocationsView
  },
  {
    path: '/episodes',
    name: 'episodes',
    component: EpisodesView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
