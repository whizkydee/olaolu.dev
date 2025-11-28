import {
  isDev,
  getShelfURL,
  getLandingURL,
  breakpoints,
  getMainElem,
  getAnnouncer,
} from './helpers'
import {
  SOCIAL_PROFILES,
  BANNER_CONTENT,
  BANNER_CONTENT_HIREABLE,
} from './constants'
import Vue from 'vue'
import { hireable } from '../../config'
import { toPx as px, inBrowser } from '@mrolaolu/helpers'

export const SharedMixins = {
  data: () => ({
    hireable,
    isPortrait: false,
    isMaxHeight: false,
    isMediumScreen: false,
    shelfURL: getShelfURL(),
    socialProfiles: SOCIAL_PROFILES,
    landingURL: getLandingURL(),
    DEV: isDev(),
  }),

  computed: {
    mainElem: () => getMainElem(),
    announcer: () => getAnnouncer(),
    workURL() {
      return '/work'
    },

    resumeURL() {
      return '/resume'
    },

    seoURLs() {
      return {
        home: 'https://olaolu.dev',
        'list-of-posts': 'https://olaolu.dev/shelf',
        resume: 'https://olaolu.dev/resume',
        work: 'https://olaolu.dev/work',
        contact: 'https://olaolu.dev/contact',
        'post-page': 'https://olaolu.dev/shelf/' + this.$route.fullPath,
      }
    },

    resumePDF() {
      return this.shelfURL.replace('/shelf', '') + `/Resume-Olaolu-Olawuyi.pdf`
    },

    isHome() {
      return this.$route.path === '/'
    },

    isShelfEnv() {
      return this.__currentEnv === 'SHELF'
    },

    isShelf() {
      return !this.isHome && !this.isWork
    },

    isWork() {
      return inBrowser() && location.href.startsWith(this.workURL)
    },

    isResume() {
      return inBrowser() && location.href.startsWith(this.resumeURL)
    },
  },

  created() {
    inBrowser() &&
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

  methods: {
    getLandingURL,
    getShelfURL,
    async showConsoleMarketingBanner() {
      const contentBody = this.hireable
        ? BANNER_CONTENT_HIREABLE
        : BANNER_CONTENT
      return (
        !this.DEV &&
        console.log(
          `${await import('raw-loader!./cat.txt').then(
            m => m.default
          )} ${contentBody}`
        )
      )
    },
  },
}

export default Vue.mixin(SharedMixins)
