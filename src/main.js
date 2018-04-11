import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Buefy)

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
