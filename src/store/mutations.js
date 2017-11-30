import * as types from './mutation-types'

export default {
  [types.CHANGE_HOUR] (state, value) {
    console.log(state, value)
  },

  [types.CHANGE_MINUTE] (state, value) {
    console.log(state, value)
  }
}
