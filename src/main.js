// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Counter from './components/events/Counter'
import MouseCoordinates from './components/events/MouseCoordinates'
import KeypressCounter from './components/events/KeypressCounter'

Vue.config.productionTip = false

// global components
Vue.component('counter', Counter)
Vue.component('coords', MouseCoordinates)
Vue.component('keycount', KeypressCounter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
