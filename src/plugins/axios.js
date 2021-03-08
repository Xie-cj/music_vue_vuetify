import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { baseURL, devBaseURL, timeout, retry, retryDelay } from '@/config'

Vue.use(VueAxios, axios)

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = devBaseURL
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = baseURL
}
axios.defaults.timeout = timeout;
axios.defaults.retry = retry;
axios.defaults.retryDelay = retryDelay;

// 响应拦截器
axios.interceptors.response.use(
  function (response) {
    return response
  },
  function axiosRetryInterceptor(error) {
    var config = error.config;
    // 假如config为空或config没有设置retry，直接reject
    if (!config || !config.retry) {
      return Promise.reject(error);
    }
    // 重置重试次数
    config.__retryCount = config.__retryCount || 0;
    // 检查是否超过重置次数
    if (config.__retryCount >= config.retry) {
      return Promise.reject(error);
    }
    // 重发计数器加1
    config.__retryCount += 1;
    // 延时重发
    var backoff = new Promise((resolve) => {
      store.commit('setMessage', {
        content: `请求失败，当前第${config.__retryCount}次重新请求`,
        color: 'error',
        timeout: retryDelay,
        isShow: true
      })
      setTimeout(() => {
        resolve();
      }, config.retryDelay || 1);
    });
    // 重发请求
    return backoff.then(() => {
      return axios(config);
    });
  }
);

// 导出get方法
export function get(url, params, showLoading = false) {
  // params ? params.withCredentials = true : params = { withCredentials: true }
  return new Promise((resolve, reject) => {
    showLoading && store.commit('setLoading', true)
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    }).finally(() => {
      showLoading && store.commit('setLoading', false)
    })
  })
}