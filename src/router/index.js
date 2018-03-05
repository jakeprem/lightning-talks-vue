import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/IndexPage'
import LoginPage from '@/pages/LoginPage'
import SubmitPage from '@/pages/SubmitPage'
import ListTalksPage from '@/pages/ListTalksPage'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/talks/new',
      name: 'SubmitPage',
      component: SubmitPage
    },
    {
      path: '/talks',
      name: 'ListTalksPage',
      component: ListTalksPage
    }
  ]
})
