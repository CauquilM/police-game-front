import Vue from 'vue'
import VueRouter from 'vue-router'
import TrafficStopView from '../views/TrafficStopView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: TrafficStopView
  }
]

const router = new VueRouter({
  routes
})

export default router
