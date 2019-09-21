import fonts from './fonts'
import '@saucedrip/core/normalize-css'
import '@saucedrip/core/global-styles'

// Import main css
import '~/assets/style/index.scss'

// Import sauce drip global components
import * as components from '@saucedrip/core'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  head.style.push({ type: 'text/css', cssText: fonts })

  // Initialize sauce drip shared mixins.
  Vue.mixin(components.SharedMixins)

  // Register all sauce drip components.
  for (let componentName in components) {
    Vue.component(componentName, components[componentName])
  }

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
