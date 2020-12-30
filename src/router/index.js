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
    component: () => import('../views/About.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../components/404.vue')
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
    let arr = store.state.historyArr.slice()
    if(arr[arr.length - 2] === to.name) {
      arr.pop()
    } else {
      arr.push(to.name)
    }
    store.commit('setHistoryArr', arr)
  }
})

// 节流,给back添加500ms冷却时间
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
