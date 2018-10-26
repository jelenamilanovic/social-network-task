import Vue from 'vue'
import Router from 'vue-router'
import Network from '@/components/Network'
import Person from '@/components/Person'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Network',
      component: Network,
    },
    {
      path: '/:id',
      name: 'Person',
      component: Person
    }
  ],
  mode: 'history'
})
