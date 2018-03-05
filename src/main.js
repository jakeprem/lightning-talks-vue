import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {firebaseApp, firebaseDb} from './firebaseInit'

import VueFirestore from 'vue-firestore'

Vue.config.productionTip = false

Vue.use(VueFirestore)

Vue.prototype.$firebase = firebaseApp
Vue.prototype.$db = firebaseDb

/* eslint-disable no-new */
Window.VueApp = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  beforeMount () {
    store.dispatch('fetchActiveEvent')
  }
})
