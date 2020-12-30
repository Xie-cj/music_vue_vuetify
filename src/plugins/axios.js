import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { baseURL, devBaseURL, timeout } from '@/config'

Vue.use(VueAxios, axios)

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = devBaseURL
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = baseURL
}
axios.defaults.timeout = timeout;

// 导出get方法
export function get(url, params) {
  params ? params.withCredentials = true : params = { withCredentials: true }
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}