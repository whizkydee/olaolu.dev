import fonts from './fonts'
import '@saucedrip/core/normalize-css'
import '@saucedrip/core/global-styles'

// Import main css
import '~/assets/style/index.scss'

import {
  isDev,
  registerEnv,
  getMainElem,
  getAnnouncer,
} from '@saucedrip/core/helpers'
// Import sauce drip global components
import * as components from '@saucedrip/core'
import { SharedMixins } from '@saucedrip/core/mixins'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default'
import WorkLayout from '~/layouts/WorkLayout'

import PageHeader from '~/components/PageHeader'

// The Client API can be used here. Learn more: https://gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  // Cache gridsome's default router scroll behavior handler
  // so we can override it later.
  const cachedScrollBehavior = router.options.scrollBehavior

  registerEnv(Vue, 'SHELF')
  Vue.config.productionTip = false

  head.style.push({ type: 'text/css', cssText: fonts })

  // Here, we override the scroll behaviour with one that allows
  // for better a11y with SRs by manipulating the focus target
  router.options.scrollBehavior = function(to, from, saved) {
    const mainElem = getMainElem()
    const announcer = getAnnouncer()

    if (mainElem) {
      const announceRouteChange = () => {
        mainElem.focus()
        // Read out the announcement.
        announcer && announcer.setAttribute('aria-hidden', 'false')
        // Reset document scroll.
        window.scrollTo(0, 0)
      }

      // In production, delay route change announcement.
      if (isDev()) announceRouteChange()
      else window.setTimeout(announceRouteChange, 0)
    }

    if (typeof cachedScrollBehavior == 'function') {
      cachedScrollBehavior(to, from, saved)
    }
  }

  // Initialize sauce drip shared mixins.
  Vue.mixin(SharedMixins)

  // Register all sauce drip components.
  for (let componentName in components) {
    Vue.component(componentName, components[componentName])
  }

  Vue.component('PageHeader', PageHeader)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('WorkLayout', WorkLayout)
}
