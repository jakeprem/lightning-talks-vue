import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Admin from '@/views/Admin'

import LoginPage from '@/pages/LoginPage'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
