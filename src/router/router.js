import Vue from 'vue'
import Router from 'vue-router'
import Profile from '../pages/Profile'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home'),
    },
  ]
});

export default router

