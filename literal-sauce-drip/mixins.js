import Vue from 'vue'
import { SOCIAL_PROFILES } from './constants'
import { toPx as px } from '@mrolaolu/helpers'
import { getShelfURL, getLandingURL, breakpoints, isDev } from './helpers'

export const SharedMixins = {
  data: () => ({
    isPortrait: false,
    isMaxHeight: false,
    isMediumScreen: false,
    shelfURL: getShelfURL(),
    socialProfiles: SOCIAL_PROFILES,
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

    seoURLs() {
      return {
        'list-of-posts': 'https://olaolu.dev/shelf',
        resume: 'https://olaolu.dev/resume',
        work: 'https://olaolu.dev/work',
        'post-page': 'https://olaolu.dev/shelf/' + this.$route.fullPath,
      }
    },

    resumePDF() {
      return this.landingURL + `/Resume-Olaolu-Olawuyi.pdf`
    },

    isHome() {
      return this.__currentEnv === 'HOME'
    },

    isShelfEnv() {
      return this.__currentEnv === 'SHELF'
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

    isResume() {
      return (
        typeof window !== 'undefined' &&
        location.href.startsWith(this.resumeURL)
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
