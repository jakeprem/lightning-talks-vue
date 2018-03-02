import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const types = {
  SET_ACTIVE_EVENT: 'SET_ACTIVE_EVENT'
}

const state = {
  activeEvent: Date()
}

const getters = {
  activeEvent: state => state.activeEvent
}

const actions = {
  setActiveEvent({ commit }, event) {
    commit(types.SET_ACTIVE_EVENT, event)
  }
}

const mutations = {
  [types.SET_ACTIVE_EVENT] (state, event) {
    state.activeEvent = event
  }
}



export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug
})