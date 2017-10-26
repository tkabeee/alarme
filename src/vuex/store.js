import Vue from 'vue'
import Vuex from 'vuex'

import {
  CHANGE_NUMBER
} from './mutation-types'

Vue.use(Vuex)

const state = {
  now: '',
  hour: '',
  minute: ''
}

const actions = {
  [CHANGE_NUMBER] () {
  }
}

const getters = {
}

const mutations = {
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
