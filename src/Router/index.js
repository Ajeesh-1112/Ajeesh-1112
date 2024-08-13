import vue from "vue"
import Router from "vue-router"
vue.use(Router)

import Signup from "@/components/Signup.vue"
import Login from "@/components/Login.vue"
import homepage from "@/components/Home/homepage.vue"
import profile from "@/components/profile.vue"
import Quiz from "@/components/Home/homeChildrens/Quiz.vue"
import sidebar from "@/components/Home/homeChildrens/sidebar.vue"
const routes=[
    {
     path:"/",
     name:"sign-up",
     component:Signup,
    },
    {
      path:"/login",
      name:"login",
      component:Login
    },
    {
      path:"/home",
      name:"home",
      component:homepage,
      children:[
        {
            path:"profile",
            name:"profile",
            components:{
              default:profile,
            }

        },
        {
          path:"test",
          name:"test",
          components:{
            sidebar:sidebar
          },
          children:[
            {
              
                path:"Quiz/:languages",
                name:"Quiz",
                component:Quiz
                
    
            }
          ]
        },
       
    
        
      ]

    },
  
]

const router=new Router({
  mode: 'history', 
    routes
})

export default router