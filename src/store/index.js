import Vue from 'vue'
import Vuex from 'vuex'

import EventModel from '@/models/EventModel'
import FirebaseUtils from '@/utils/firebase'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const types = {
  SET_ACTIVE_EVENT: 'SET_ACTIVE_EVENT',
  SET_USER: 'SET_USER'
}

const state = {
  activeEvent: EventModel.default(),
  user: ''
}

const getters = {
  activeEvent: state => state.activeEvent,
  activeEventState: state => {
    let currentDate = new Date()
    let activeEvent = state.activeEvent

    switch (true) {
      case currentDate < activeEvent.submission_deadline:
        return 'BeforeSubmissionDeadline'
      case currentDate < activeEvent.start_datetime:
        return 'BeforeEventStart'
      case currentDate < activeEvent.end_datetime:
        return 'FeedbackEnabled'
    }
  },
  user: state => state.user
}

const actions = {
  fetchActiveEvent ({ commit }) {
    FirebaseUtils.getActiveEvent()
      .then(event => {
        commit(types.SET_ACTIVE_EVENT, event)
      })
      .catch(error => console.log(error))
  },
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
