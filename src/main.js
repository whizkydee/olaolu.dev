import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import './registerServiceWorker'
import { ContentView, Cavalier } from '@/SauceDripUI'

Vue.component('Cavalier', Cavalier)
Vue.component('ContentView', ContentView)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
