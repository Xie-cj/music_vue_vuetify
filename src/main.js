import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// 样式
import '@/assets/style/style.scss'

// 插件
import '@/plugins'

// 网站配置
import config from '@/config'
Vue.prototype.$config = config

// 接口
import api from '@/config/api.js'
Vue.prototype.$api = api

// 全局message方法
Vue.prototype.$message = (content, color = 'info', timeout = 3000, isShow = true) => {
  store.commit('setMessage', {
    content,
    color,
    timeout,
    isShow
  })
}

// 事件总线
// Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
