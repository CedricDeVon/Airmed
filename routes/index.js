import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '~/pages/HomeView.vue';
import AboutView from '~/pages/About/index.vue';
import DiagnosisView from '~/pages/Diagnosis/index.vue';
import NotFoundView from '~/pages/Diagnosis/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/diagnosis',
      name: 'diagnosis',
      component: DiagnosisView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
});

export default router;
