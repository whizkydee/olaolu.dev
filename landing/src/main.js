import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import './registerServiceWorker'
import * as components from '@/components'
import '@saucedrip/core/mixins'
import { registerEnv } from '@saucedrip/core/helpers'

registerEnv(Vue, 'HOME')

// Register all sauce drip components.
for (let componentName in components) {
  Vue.component(componentName, components[componentName])
}

Vue.mixin({
  methods: {
    /**
     * Return the corresponding element for a valid section id.
     * @param {string=} id
     * @return {HTMLElement}
     */
    getSection(id = this.currentSection) {
      const sectionElem = this.$root.$el.querySelector(`[data-section='${id}']`)

      if (!sectionElem) return
      return sectionElem
    },
  },
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
