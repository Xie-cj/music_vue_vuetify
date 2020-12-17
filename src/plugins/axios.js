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
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
