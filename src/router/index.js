import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/IndexPage'
import SubmitPage from '@/pages/SubmitPage'
import ListTalksPage from '@/pages/ListTalksPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
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
