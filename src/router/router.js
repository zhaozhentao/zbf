import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home'),
    },
    {
      path: '/messages',
      name: 'messages',
      component: () => import('@/pages/HistoryMessages'),
    },
  ]
});

export default router

