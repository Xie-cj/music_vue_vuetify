import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

import store from '@/store'

import { title } from '@/config'

// 改写push方法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  store.commit('setHistoryLength', 1)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   document.title = title
//   if (to.meta.title) {
//     document.title = `${to.meta.title} - ${title}`
//   } else {
//     document.title = title
//   }
//   next()
// })

router.afterEach((to, from) => {
  document.title = title
  if (to.meta.title) {
    document.title = `${to.meta.title} - ${title}`
  } else {
    document.title = title
  }
})

// 节流
let state = true
router.back = function() {
  if(state && store.state.historyLength > 1) {
    // 历史记录大于1，返回上页
    state = false
    store.commit('setHistoryLength', -1)
    this.go(-1)
    setTimeout(() => {
      state = true
    }, 500)
  }
}

export default router
