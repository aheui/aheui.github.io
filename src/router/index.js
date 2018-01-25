import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import guide from '@/components/guide'

Vue.use(Router)

export default new Router({
  mode: 'history',
  fallback: false,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/guide',
      name: 'guide',
      component: guide
    }
  ]
})
