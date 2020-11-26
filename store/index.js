/* eslint-disable */

export const state = () => ({
  robotlist: []
})

export const mutations = {
  SET_ROBOTLIST(state, arr) {
    state.robotlist = arr
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('fetchRobotlist')
  },

  async fetchRobotlist({ commit }) {
    try {
      const { data } = await this.$axios.$get('/robot/list')
      commit('SET_ROBOTLIST', data)
    } catch (err) {
      console.log(err)
    }
  }
}
