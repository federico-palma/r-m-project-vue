import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharactersView from '../views/CharactersView.vue'
import LocationsView from '../views/LocationsView.vue'
import EpisodesView from '../views/EpisodesView.vue'
import CharacterDetailsView from '../views/CharacterDetailsView.vue'

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
    path: '/characters/:id',
    name: 'character-details',
    component: CharacterDetailsView,
    props: true
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
