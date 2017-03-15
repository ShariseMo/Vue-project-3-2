import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // }
    {
        path: "/",
        name: "login",
        component : require('@/components/Login')
    },{
        path:"/home",
        name:"home",
        component : require("@/components/Home")
    },{
        path:"/banner",
        name:"home",
        component: require("@/components/Banner")
    },{
        path:"/nav",
        name:"nav",
        component: require("@/components/Nav")
    }
  ]
})
