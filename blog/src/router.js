import Vue from 'vue'
import Router from 'vue-router'
import First from'@/views/First.vue'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/First',
      name: 'First',
      component: First
    },
   
    
  ]
})
