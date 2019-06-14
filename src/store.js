import Vue from 'vue'
import Vuex from 'vuex'
import { CURRENT_SECTION_KEY, HEADER_COMPACT } from './constants'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    [HEADER_COMPACT]: false,
    [CURRENT_SECTION_KEY]: 'une',
  },

  mutations: {
    currentSection(state, id) {
      state[CURRENT_SECTION_KEY] = id
    },

    headerCompact(state, bool) {
      state[HEADER_COMPACT] = bool
    },
  },

  actions: {},
})
