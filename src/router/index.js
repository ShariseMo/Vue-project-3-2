import Vue from 'vue'
import Router from 'vue-router'

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
        component : require('@/pages/Login')
    },{
        path:"/home",
        name:"home",
        component : require("@/pages/Home")
    },{
        path:"/banner",
        name:"home",
        component: require("@/pages/Banner")
    },{
        path:"/nav",
        name:"nav",
        component: require("@/pages/Nav")
    }
  ]
})
