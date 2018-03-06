import Vue from 'vue'
import Vuex from 'vuex'

import EventModel from '@/models/EventModel'
import UserModel from '@/models/UserModel'
import FirebaseUtils from '@/utils/firebase'
import TalkModel from '../models/TalkModel'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const types = {
  SET_ACTIVE_EVENT: 'SET_ACTIVE_EVENT',
  SET_EVENT_TALKS: 'SET_EVENT_TALKS',
  SET_USER: 'SET_USER'
}

const state = {
  activeEvent: EventModel.default(),
  eventTalks: [],
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
  eventTalks: state => state.eventTalks,
  user: state => state.user,
  username: state => state.user.displayName,
  userId: state => state.user.uid,
  isValidUser: state => {
    return UserModel._validate(state.user)
  }
}

const actions = {
  fetchActiveEvent ({ commit }) {
    FirebaseUtils.getActiveEvent()
      .then(event => {
        commit(types.SET_ACTIVE_EVENT, event)
      })
      .catch(error => console.log(error))
  },
  fetchEventTalks ({ commit }, eventId) {
    FirebaseUtils.getEventTalks(eventId)
      .then(talks => {
        commit(types.SET_EVENT_TALKS, talks)
      })
      .catch(error => console.log(error))
  },
  setActiveEvent ({ commit }, event) {
    commit(types.SET_ACTIVE_EVENT, event)
  },
  setUser ({ commit }, user) {
    commit(types.SET_USER, user)
  },
  submitTalkForEvent ({ commit, state }, talk) {
    talk.eventId = state.activeEvent['.key']
    talk.submitterId = state.user.uid
    talk.submitterName = state.user.displayName
    talk.selected = false

    return TalkModel
      .validate(talk)
      .then(FirebaseUtils.submitTalkForEvent)
      .catch(error => console.log(error))
  }
}

const mutations = {
  [types.SET_ACTIVE_EVENT] (state, event) {
    state.activeEvent = event
  },
  [types.SET_EVENT_TALKS] (state, talks) {
    state.eventTalks = talks
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
