import Vue from 'vue'
import { getShelfURL, getLandingURL } from './helpers'

export const SharedMixins = {
  data: () => ({
    shelfURL: getShelfURL(),
    landingURL: getLandingURL(),
    workURL: getShelfURL().concat('/work'),
  }),

  methods: { getShelfURL, getLandingURL },
}

export default Vue.mixin(SharedMixins)
