import Vue from 'vue'
import Router from 'vue-router'
import Network from '@/components/Network.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Network',
      component: Network,
    }
  ],
  mode: 'history'
})
