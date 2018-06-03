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
      component: () => import('@/pages/message/HistoryMessages'),
    },
    {
      path: '/photo',
      name: 'photo',
      component: () => import('@/pages/message/Photo'),
    },
    {
      path: '/shift_money',
      name: 'shift_money',
      component: () => import('@/pages/me/ShiftMoney'),
    },
    {
      path: '/duty',
      name: 'duty',
      component: () => import('@/pages/me/Duty'),
    },
  ]
});

export default router

