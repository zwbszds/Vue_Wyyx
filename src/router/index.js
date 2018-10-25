import Vue from 'vue'
import VueRouter from 'vue-router'
//引入5个主组件

import MSite from '../pages/MSite/Msite.vue'
import Find from '../pages/Find/Find.vue'
import ClassIfy from '../pages/ClassIfy/ClassIfy.vue'
import Shop from '../pages/Shop/Shop.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login'


Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:MSite,
      meta: {
        showFooter: true
      }
    },{
      path:'/find',
      component:Find,
      meta: {
        showFooter: true
      }
    },{
      path:'/classify',
      component:ClassIfy,
      meta: {
        showFooter: true
      }
    },{
      path:'/shop',
      component:Shop,
      meta: {
        showFooter: true
      }
    },{
      path:'/profile',
      component:Profile,
      meta: {
        showFooter: false
      }
    },{
      path:'/',
      redirect:'/msite'
    },{
      path:'/login',
      component:Login,
    }
  ]
})
