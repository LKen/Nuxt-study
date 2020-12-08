import { MutationTree, ActionTree } from 'vuex/types'

interface IState {
  name?: string
  [key: string]: any
}

export const state = (): IState => ({
  robotlist: []
})

export const mutations: MutationTree<IState> = {
  SET_ROBOTLIST(state, arr) {
    state.robotlist = arr
  }
}

export const actions: ActionTree<IState, any> = {
  /**
   * * Vuex action that is called only on server-side to pre-populate the store
   * First argument is the Vuex context, second argument is the Nuxt.js context
   * Dispatch other actions from here → only "entry point" for subsequent store actions on server-side
   * @param {Object} context
   */
  async nuxtServerInit({ dispatch }) {
    await dispatch('fetchRobotlist')
  },

  async fetchRobotlist({ commit }) {
    try {
      const { data } = await this.$apis.list()
      commit('SET_ROBOTLIST', data)
    } catch (err) {
      console.log(err)
    }
  }
}