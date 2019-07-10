import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Faster from './views/faster/faster.vue'
import List from './views/list/list1.vue'
// import Heather from './components/Heater.vue'
// import Footer from './components/Footer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/faster',
      component: Faster
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
