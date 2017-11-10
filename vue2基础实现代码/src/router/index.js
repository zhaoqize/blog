import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Girl from '@/components/Girl'
import Ar from '@/components/Ar'
import Ar1 from '@/components/Ar1'
import Ar2 from '@/components/Ar2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/girl',
      name: 'girl',
      component: Girl
    },{
      path: '/ar',
      name: 'ar',
      component: Ar,
      children:[
        {
          path: '1',
          name: 'ar1',
          component: Ar1
        },
         {
          path: '2',
          name: 'ar2',
          component: Ar2
        }
      ]
    }
    // ,{
    //   path: '/ar/1',
    //   name: 'ar1',
    //   component: Ar1
    // },{
    //   path: '/ar/2',
    //   name: 'ar2',
    //   component: Ar2
    // }
  ]
})
