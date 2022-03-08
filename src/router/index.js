import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharactersView from '../views/CharactersView.vue'
import CharacterDetailsView from '../views/CharacterDetailsView.vue'
import LocationsView from '../views/LocationsView.vue'
import LocationDetailsView from '../views/LocationDetailsView.vue'
import EpisodesView from '../views/EpisodesView.vue'
import EpisodeDetailsView from '../views/EpisodeDetailsView.vue'

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
    path: '/locations/:id',
    name: 'location-details',
    component: LocationDetailsView,
    props: true
  },
  {
    path: '/episodes',
    name: 'episodes',
    component: EpisodesView
  },
  {
    path: '/episodes/:id',
    name: 'episode-details',
    component: EpisodeDetailsView,
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
