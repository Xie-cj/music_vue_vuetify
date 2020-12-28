import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

import { title } from '@/config'

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

router.beforeEach((to, from, next) => {
  document.title = title
  if (to.meta.title) {
    document.title = `${to.meta.title} - ${title}`
  } else {
    document.title = title
  }
  next()
})

let state = true
router.back = function() {
  if(state) {
    state = false
    this.go(-1)
    setTimeout(() => {
      state = true
    }, 300)
  }
}

export default router
