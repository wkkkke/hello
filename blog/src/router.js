import Vue from 'vue'
import Router from 'vue-router'
import Mine from'@/views/Mine.vue'



Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/Mine',
      name: 'mine',
      component: Mine
    },
   
   
    
  ]
})
