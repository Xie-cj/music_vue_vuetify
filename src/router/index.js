import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

import store from '@/store'

import { title } from '@/config'

// 改写push方法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
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
    component: () => import('../views/About')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/ErrorPage/404.vue')
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

  // 记录路由
  if(to.name !== from.name) {
    let historyArr = store.state.historyArr.slice()
    if(historyArr[historyArr.length - 2] === to.name) {
      historyArr.pop()
    } else {
      historyArr.push(to.name)
    }
    historyArr[historyArr.length - 2] === historyArr[historyArr.length - 1] && historyArr.pop()
    store.commit('setHistoryArr', historyArr)
  }
})

// 节流,给back函数添加500ms冷却时间
let state = true
router.back = function() {
  if(state) {
    state = false
    this.go(-1)
    setTimeout(() => {
      state = true
    }, 500)
  }
}

export default router
