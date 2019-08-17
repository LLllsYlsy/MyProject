import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import homepage from '@/pages/homepage'
import homepage_unsign from '@/pages/homepage_unsign'
import infomanager from '@/pages/infomanager'
import signinfo from '@/pages/signinfo'
// import write from '@/pages/write'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: login
    },{
      path: '/homepage',
      name: 'HomePage',
      component: homepage,
    },
    {
      path: '/homepage_unsign',
      name: 'HomePage_Unsign',
      component: homepage_unsign,
    },{
      path: '/infomanager',
      name: 'InfoManager',
      component: infomanager
    },{
      path: '/signinfo',
      name: 'SignInfo',
      component: signinfo,
    }
  ]
})
