import * as types from './mutation-types'

export const updateHour = ({ commit }) => {
  commit(types.CHANGE_HOUR)
}

export const updateMinute = ({ commit }) => {
  commit(types.CHANGE_MINUTE)
}
