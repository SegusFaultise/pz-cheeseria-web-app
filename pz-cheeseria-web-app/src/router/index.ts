import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CheeseSelectionPage from '@/views/CheeseSelectionView.vue';

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
      path: '/cheese_selection_page',
      name: 'cheese_product_selection',

      component: () => import('../views/CheeseSelectionView.vue'),
    },
    {
      path: '/contact_page',
      name: 'contact_page',

      component: CheeseSelectionPage,
    },
  ],
})

export default router
