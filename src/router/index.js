import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/store/:type',
    name: 'store',
   
    component: () => import(/* webpackChunkName: "window" */ '../views/storeView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
   
    component: () => import(/* webpackChunkName: "window" */ '../views/CartView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
