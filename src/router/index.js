import Vue from 'vue'
import Router from 'vue-router'
import MSite from '@/pages/MSite/MSite'
import Search from '@/pages/Search/Search'
import Profile from '@/pages/Profile/Profile'
import Order from '@/pages/Order/Order'
import Login from '@/pages/Login/Login/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/msite',
      component:MSite,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/',
      redirect:'/msite',
      meta:{
        showFooter: true
      }
    },
    {
      path:'/login',
      component:Login
    },
  ]
})
