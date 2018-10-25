
import Vue from 'vue'
import App from './App'
import  router from './router'
import  './mock/mockServer'
import store from './store'

import FooterGuide from './components/FooterGuide/FooterGuide.vue'

Vue.component('FooterGuide',FooterGuide)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store

})
