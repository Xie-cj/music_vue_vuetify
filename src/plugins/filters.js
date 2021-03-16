import Vue from 'vue'
import { add0 } from '@/utils'

// 补0
Vue.filter('add0', n => add0(n))

// 毫秒转分钟
Vue.filter('msToMin', ms => {
  let s = parseInt(ms / 1000)
  return `${add0(parseInt(s / 60))}:${add0(s % 60)}`
})