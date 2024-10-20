import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home_page',
      component: HomeView,
    },
    {
      path: '/about_page',
      name: 'about_page',

      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/cheese_product_selection_page',
      name: 'cheese_product_selection_page',

      component: () => import('../views/CheeseProductSeletionView.vue'),
    },
    {
      path: '/account_page',
      name: 'account_page',

      component: () => import('../views/AccountView.vue'),
    },
  ],
})

export default router
