import Vue from 'vue'
import Vuex from 'vuex'
import VueMask from 'v-mask'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import { BootstrapVue } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2'
import LoadScript from 'vue-plugin-load-script'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './service/http'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuex)
Vue.use(VueMask)
Vue.use(VueRouter)
Vue.use(LoadScript)
Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)
Vue.use(VueAxios, http)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
