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
      children: [
        {
          path: 'profile',
          component: () => import('@/pages/Profile')
        },
        {
          path: '',
          component: () => import('@/pages/Messages')
        },
      ]
    },
  ]
});

export default router

