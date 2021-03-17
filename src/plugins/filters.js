import Vue from 'vue'
import {
  add0,
  msToMin
} from '@/utils'

// 补0
Vue.filter('add0', n => add0(n))

// 毫秒转分钟
Vue.filter('msToMin', ms => msToMin(ms))