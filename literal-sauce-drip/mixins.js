import Vue from 'vue'
import { toPx as px } from '@mrolaolu/helpers'
import { getShelfURL, getLandingURL, breakpoints } from './helpers'

export const SharedMixins = {
  data: () => ({
    isPortrait: false,
    isMediumScreen: false,
    shelfURL: getShelfURL(),
    landingURL: getLandingURL(),
    workURL: getShelfURL().concat('/work'),
  }),

  computed: {
    isHome() {
      if (typeof window === 'undefined') return
      return (
        location.href.startsWith(this.landingURL) &&
        !location.pathname.includes('/shelf')
      )
    },

    isShelf() {
      if (typeof window === 'undefined') return
      return location.href.startsWith(this.shelfURL)
    },
  },

  created() {
    if (typeof window === 'undefined') return
    ;[
      {
        key: 'isMediumScreen',
        query: `(max-width: ${px(breakpoints.medium)})`,
      },
      {
        key: 'isPortrait',
        query: `(max-width: ${px(breakpoints.portrait)})`,
      },
    ].forEach(({ key, query }) => {
      let mql = window.matchMedia(query)

      this[key] = mql.matches
      mql.addListener(e => (this[key] = e && e.matches))
    })
  },

  methods: { getShelfURL, getLandingURL },
}

export default Vue.mixin(SharedMixins)
