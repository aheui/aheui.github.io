import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import guide from '@/components/guide'
import standard from '@/components/text/standard'
import aheui from '@/components/text/aheui'

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
      component: guide,
      children: [
        {
          path: '/',
          name: 'aheui',
          component: aheui,
        },
        {
          path: 'standard',
          name: 'standard',
          component: standard,
        }
      ]
    }
  ]
})
