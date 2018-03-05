import Vue from 'vue'
import Vuex from 'vuex'

import EventModel from '@/models/EventModel'
Window.EventModel = EventModel

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const types = {
  SET_ACTIVE_EVENT: 'SET_ACTIVE_EVENT',
  SET_USER: 'SET_USER'
}

const state = {
  activeEvent: Date(),
  user: ''
}

const getters = {
  activeEvent: state => state.activeEvent,
  user: state => state.user
}

const actions = {
  setActiveEvent ({ commit }, event) {
    commit(types.SET_ACTIVE_EVENT, event)
  },
  setUser ({ commit }, user) {
    commit(types.SET_USER, user)
  }
}

const mutations = {
  [types.SET_ACTIVE_EVENT] (state, event) {
    state.activeEvent = event
  },
  [types.SET_USER] (state, user) {
    state.user = user
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug
})
