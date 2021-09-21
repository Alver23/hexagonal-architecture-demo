import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ProductListPage from '@/app/products/infrastructure/ui/pages/product-list/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: ProductListPage,
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: () => import('@/app/products/infrastructure/ui/pages/product-detail/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
