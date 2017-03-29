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
      component: require('@/pages/Login')
    },
    {
      path: "/layouts",
      component: require('@/pages/layouts'),
      children: [{
          path: "home",
          name: "home",
          component: require("@/pages/Home")
        },
        {
          path: "banner",
          name: "banner",
          component: require("@/pages/Banner")
        },
        {
          path: "/",
          redirect: 'home'
        },
        {
          path:"classify",
          name:"classify",
          component:require("@/pages/Classify")
        }

      ]
    },

  ]
})
