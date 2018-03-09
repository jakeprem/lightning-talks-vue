import * as types from '../mutation-types'

import EventModel from '@/models/EventModel'
import TalkModel from '@/models/TalkModel'

import FirebaseUtils from '@/utils/firebase'

const state = {
  event: EventModel.default(),
  talks: []
}

const getters = {
  event: state => state.event,
  event_state: state => {
    let currentDate = new Date()
    let event = state.event

    switch (true) {
      case currentDate < event.submission_deadline:
        return 'BeforeSubmissionDeadline'
      case currentDate < event.start_datetime:
        return 'BeforeEventStart'
      case currentDate < event.end_datetime:
        return 'FeedbackEnabled'
    }
  },
  talks: state => state.talks
}

const actions = {
  fetchEvent ({ commit }) {
    return FirebaseUtils.getNextEvent()
      .then(event => {
        commit(types.SET_EVENT, event)
        return event
      })
  },
  fetchEventTalks ({ commit }, event) {
    return FirebaseUtils.getEventTalks(event)
      .then(talks => {
        commit(types.SET_EVENT_TALKS, talks)
        return talks
      })
  },
  submitTalkForEvent ({ commit, rootState }, talk) {
    talk.eventId = state.event['.key']
    talk.submitterId = rootState.user.uid
    talk.submitterName = rootState.user.displayName
    talk.selected = false

    return TalkModel
      .validate(talk)
      .then(FirebaseUtils.submitTalkForEvent)
      .catch(error => console.log(error))
  }
}

const mutations = {
  [types.SET_EVENT] (state, event) {
    state.event = event
  },
  [types.SET_EVENT_TALKS] (state, talks) {
    state.talks = talks
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
