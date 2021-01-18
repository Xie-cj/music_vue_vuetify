import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// 插件
import '@/plugins'

// 网站配置
import config from '@/config'
Vue.prototype.$config = config

// 接口
import api from '@/config/api.js'
Vue.prototype.$api = api

// 事件总线
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
