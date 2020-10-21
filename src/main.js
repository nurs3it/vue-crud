import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import VueRouter from 'vue-router'
import Router from "@/router/index"
import vuetify from '@/plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

const router = new VueRouter({
  mode: 'history',
  routes: Router
});

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  store,
  vuetify,
  render: h => h(App),
  router: router
}).$mount('#app')
