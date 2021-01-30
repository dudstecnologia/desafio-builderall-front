import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import { BootstrapVue } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './service/http'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)
Vue.use(VueAxios, http)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
