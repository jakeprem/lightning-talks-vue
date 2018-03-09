import Vue from 'vue'
import Vuex from 'vuex'

import admin from './modules/admin'
import user from './modules/user'

import * as types from './mutation-types'

import UserModel from '@/models/UserModel'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  user: ''
}

const getters = {
  user: state => state.user,
  username: state => state.user.displayName,
  userId: state => state.user.uid,
  isValidUser: state => {
    return UserModel._validate(state.user)
  }
}

const actions = {
  setUser ({ commit }, user) {
    commit(types.SET_USER, user)
  }
}

const mutations = {
  [types.SET_USER] (state, user) {
    state.user = user
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    adminStore: admin,
    userStore: user
  },
  strict: debug
})
