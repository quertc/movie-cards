import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/discover/popular',
  },
  {
    path: '/discover/:category',
    name: 'discover',
    component: () => import('@/views/Discover.vue'),
    props: true,
  },
  {
    path: '/genres/:genre',
    name: 'genres',
    component: () => import('@/views/Genres.vue'),
    props: true,
  },
  {
    path: '/search/:query',
    name: 'search',
    component: () => import('@/views/Search.vue'),
    props: true,
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue'),
  },
  {
    path: '*',
    redirect: '/404',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
