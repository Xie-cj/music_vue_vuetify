import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { baseURL, timeout } from '@/config'

Vue.use(VueAxios, axios)

axios.defaults.baseURL = baseURL
axios.defaults.timeout = timeout;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
