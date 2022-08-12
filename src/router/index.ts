import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ChickenList from '../views/ChickenList.vue';
import SeafoodList from '../views/SeafoodList.vue';
import DessertList from '../views/DessertList.vue';
import DetailsRecette from '../views/DetailsRecette.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/ChickenList/:id',
    name: 'ChickenList',
    component: ChickenList
  },
  {
    path: '/ChickenList',
    name: 'ChickenList',
    component: ChickenList
  },
  {
    path: '/SeafoodList/:id',
    name: 'SeafoodList',
    component: SeafoodList
  },
  {
    path: '/SeafoodList',
    name: 'SeafoodList',
    component: SeafoodList
  },
  {
    path: '/DessertList/:id',
    name: 'DessertList',
    component: DessertList
  },
  {
    path: '/DessertList',
    name: 'DessertList',
    component: DessertList
  },
  {
    path: '/DetailsRecette/:id',
    name: 'DetailsRecette',
    component: DetailsRecette
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
