import Vue from 'vue'
import Router from 'vue-router'

//import home from '../pages/home.vue'
import Detail from '../pages/goodsDetail.vue'
import Msg from '../components/Message.vue'

Vue.use(Router)

const routes = [
{
  path: '/',
  component: resolve => require(['../pages/home'],resolve),
  meta: {
    title:'home'
  }
},
{
  path: '/msg',
  component: Msg
},
{
  path: '/detail',
  component: Detail,
  children: [
    {
      path:'msg',
      component: Msg
    }
  ]
}]

export default new Router({
  routes
})
