import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//  import Showresult from '../components/Showresult'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
      component: Home,
  
  },
  // {
  //   path: '/results',
  //   name: 'Showresult',
  //   component: Showresult,
  
  // },
  
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
  
})



export default router
