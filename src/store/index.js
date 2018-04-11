import Vue from 'vue'
import Vuex from 'vuex'

import EventService from '@/lib/EventService.js'

import EventModel from '@/models/EventModel'
import UserModel from '@/models/UserModel'
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
    EventService.getActiveEvent()
      .then(event => {
        event.start_datetime = new Date(event.start_datetime)
        event.end_datetime = new Date(event.end_datetime)
        event.submission_deadline = new Date(event.submission_deadline)

        commit(types.SET_ACTIVE_EVENT, event)
        return event
      })
      .then(event => {
        return EventService.getEventTalks(event['id'])
      })
      .then(talks => {
        commit(types.SET_EVENT_TALKS, talks)
      })
      .catch(error => console.log(error))
  },
  fetchEventTalks ({ commit }, eventId) {
    EventService.getEventTalks(eventId)
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
    talk.eventId = state.activeEvent['id']
    talk.submitterId = state.user.uid
    talk.submitterName = state.user.displayName
    talk.selected = false

    return TalkModel
      .validate(talk)
      .then(EventService.submitTalkForEvent)
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
