import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {firebaseApp, firebaseDb, firebaseUI, firebaseUIConfig} from './firebaseInit'

import VueFirestore from 'vue-firestore'

Vue.config.productionTip = false

Vue.use(VueFirestore)

Vue.prototype.$firebase = {
  app: firebaseApp,
  db: firebaseDb,
  ui: firebaseUI,
  uiConfig: firebaseUIConfig
}

/* eslint-disable no-new */
Window.VueApp = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  beforeMount () {
    store.dispatch('fetchActiveEvent')
  },
  created () {
    firebaseApp.auth().onAuthStateChanged(user => {
      console.log('Auth state changed: ', user)
      if (user) {
        var {displayName, uid} = user
        this.$store.dispatch('setUser', {
          displayName, uid
        })
        this.$router.push({name: 'IndexPage'})
      } else {
        this.$store.dispatch('setUser', '')
      }
    })
  }
})
