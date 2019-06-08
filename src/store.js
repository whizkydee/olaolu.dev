import Vue from 'vue'
import Vuex from 'vuex'
import { CURRENT_SECTION_KEY } from './constants'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    [CURRENT_SECTION_KEY]: 'une',
  },

  mutations: {
    currentSection(state, id) {
      state[CURRENT_SECTION_KEY] = id
    },
  },

  actions: {},
})
