import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/discover/popular'
    },
    {
      path: '/discover/:category',
      name: 'discover',
      component: () => import('./views/Discover.vue')
    },
    {
      path: '/genres/:genre',
      name: 'genres',
      component: () => import('./views/Genres.vue')
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      component: () => import('./views/404.vue')
    }
  ]
})
