import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import './registerServiceWorker'
import * as components from '@/components'

// Register all sauce drip components.
for (let componentName in components) {
  Vue.component(componentName, components[componentName])
}

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
