import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },  
  {
    path: '/vistauno',
    name: 'vistauno',
    component: () => import(/* webpackChunkName: "vistauno" */ '../views/VistaUno.vue')
  },
  {
    path: '/vistados',
    name: 'vistados',
    component: () => import(/* webpackChunkName: "vistados" */ '../views/VistaDos.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
