import * as types from '../mutation-types'

import FirebaseUtils from '@/utils/firebase'

const state = {
  events: [],
  submittedTalks: []
}

const getters = {
  events: state => state.events,
  submittedTalks: state => state.submittedTalks
}

const actions = {
  fetchEvents ({ commit }) {
    return FirebaseUtils.getEvents()
      .then(events => {
        commit(types.SET_EVENTS, events)
        return events
      })
  },
  fetchSubmittedTalks ({ commit }, event) {
    return FirebaseUtils.getEventSubmittedTalks(event)
      .then(talks => {
        commit(types.SET_SUBMITTED_TALKS, talks)
        return talks
      })
  }
}

const mutations = {
  [types.SET_EVENTS] (state, events) {
    state.events = events
  },
  [types.SET_SUBMITTED_TALKS] (state, talks) {
    state.submittedTalks = talks
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
