import Vue from 'vue'
import Vuex from 'vuex'
import { CURRENT_SECTION, HEADER_COMPACT } from './constants'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    [HEADER_COMPACT]: false,
    [CURRENT_SECTION]: 'une',
  },

  mutations: {
    [CURRENT_SECTION](state, id) {
      state[CURRENT_SECTION] = id
    },

    headerCompact(state, bool) {
      state[HEADER_COMPACT] = bool
    },
  },

  actions: {},
})
