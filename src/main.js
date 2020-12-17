import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import '@/plugins'

import config from '@/config'
Vue.prototype.$config = config

import api from '@/config/api.js'
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
