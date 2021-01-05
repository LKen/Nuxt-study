import { MutationTree, ActionTree } from 'vuex/types'

// interface IState {
//   robotlist?: Array<any>
//   [key: string]: any
// }

// type TParams = 'robotlist' | 'robotname'
// type TState = Partial<Record<TParams, any>>

// type Proxy<T> = {
//   get(): T
//   set(value: T): void
// }
// type Proxify<T> = {
//   [P in keyof T]: Proxy<T[P]>
// }

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const state = () => ({
  robotlist: [],
  ok: 123
})

export type RootState = ReturnType<typeof state>

// export const getters: GetterTree<RootState, RootState> = {
//   name: state => state.name,
// }

export const mutations: MutationTree<RootState> = {
  SET_ROBOTLIST(state, arr) {
    state.robotlist = arr
  }
}

export const actions: ActionTree<RootState, RootState> = {
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
