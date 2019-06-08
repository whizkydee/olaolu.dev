import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import './registerServiceWorker'
import { ContentView, Cavalier } from '@/SauceDripUI'

Vue.component('Cavalier', Cavalier)
Vue.component('ContentView', ContentView)

if (!('scrollBehavior' in document.documentElement.style)) {
  window.__forceSmoothScrollPolyfill__ = true
  require('smoothscroll-polyfill').polyfill()
}

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
