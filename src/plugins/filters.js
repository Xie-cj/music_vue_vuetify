import Vue from 'vue'

// 补0
Vue.filter('add0', n => {
  return n < 10 ? '0' + n : n
})