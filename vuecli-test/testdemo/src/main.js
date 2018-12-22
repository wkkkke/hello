import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/js/rem.js'
import '@/assets/css/reset.css'

Vue.config.productionTip = false
global.API_PROXY = 'https://bird.ioliu.cn/v2?url=';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')