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
    {
      path: '/photo',
      name: 'photo',
      component: () => import('@/pages/Photo'),
    },
    {
      path: '/shift_money',
      name: 'shift_money',
      component: () => import('@/pages/ShiftMoney'),
    },
    {
      path: '/duty',
      name: 'duty',
      component: () => import('@/pages/Duty'),
    },
  ]
});

export default router

