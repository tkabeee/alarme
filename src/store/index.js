import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  now: '',
  hour: '',
  minute: ''
}

const actions = {
}

const getters = {
}

const mutations = {
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  actions,
  getters,
  mutations
})
