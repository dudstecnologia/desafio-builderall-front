import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import routes from './routes'

Vue.use(VueRouter)

if (localStorage.getItem('token')) {
  store.dispatch('auth/setAuthToken', localStorage.getItem('token'))
}

const router = new VueRouter({
  mode: "history",
  routes
})

router.beforeEach((to, from, next) => {
  if (store.getters['auth/getIsAuth'] && to.path === '/login') {
    return next({ path: '/admin' })
  }

  if(to.matched.some(r => r.meta.auth)) {
    if (store.getters['auth/getIsAuth']) {
      next()
      return
    }

    next('/login')
  } else {
    next()
  }
})

export default router