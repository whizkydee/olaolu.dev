import Vue from 'vue'
import { toPx as px } from '@mrolaolu/helpers'
import { getShelfURL, getLandingURL, breakpoints, isDev } from './helpers'

export const SharedMixins = {
  data: () => ({
    isPortrait: false,
    isMaxHeight: false,
    isMediumScreen: false,
    shelfURL: getShelfURL(),
    landingURL: getLandingURL(),
    DEV: isDev(),
  }),

  computed: {
    workURL() {
      return (this.DEV ? this.shelfURL : this.landingURL) + '/work'
    },

    resumeURL() {
      return (this.DEV ? this.shelfURL : this.landingURL) + '/resume'
    },

    isHome() {
      return (
        typeof window !== 'undefined' &&
        (location.href.startsWith(this.landingURL) &&
          !location.pathname.includes('/shelf'))
      )
    },

    isShelf() {
      return (
        typeof window !== 'undefined' && location.href.startsWith(this.shelfURL)
      )
    },

    isWork() {
      return (
        typeof window !== 'undefined' && location.href.startsWith(this.workURL)
      )
    },
  },

  created() {
    typeof window !== 'undefined' &&
      [
        {
          key: 'isMediumScreen',
          query: `(max-width: ${px(breakpoints.medium)})`,
        },
        {
          key: 'isPortrait',
          query: `(max-width: ${px(breakpoints.portrait)})`,
        },
        {
          key: 'isMaxHeight',
          // prettier-ignore
          query: `(min-width: ${px(breakpoints['>medium'])}) and (max-height: 1199px)`
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
