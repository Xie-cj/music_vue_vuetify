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
// 改写replace方法
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
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
    path: '/playlist/:id',
    name: 'Playlist',
    component: () => import('../views/Playlist'),
    meta: {
      title: '歌单'
    }
  },
  {
    path: '/artists/:id',
    name: 'Artists',
    component: () => import('../views/Artists'),
    meta: {
      title: '歌手'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About'),
    meta: {
      title: '关于'
    }
  },
  {
    path: '/search/:keyword',
    name: 'Search',
    component: () => import('../views/SearchResults'),
    meta: {
      title: '搜索'
    }
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('../views/Setting'),
    meta: {
      title: '设置'
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/ErrorPage/404.vue'),
    meta: {
      title: '找不到页面'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, store.state.theme.animationTime)
    })
  }
})

router.afterEach((to, from) => {
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
