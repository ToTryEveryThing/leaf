import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/LoginView'
import main from '../views/MainView'
const routes = [ 
    {
      path:'/',
      name:'main',
      component:main,
      meta: {
        req:true,
      }, 
    },
    {
        path:'/login',
        name:'login',
        component:login,
        meta: {
          req:false,
        }, 
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.meta.req){
      if(localStorage.getItem("message")==="ok"){
        next()
      }else{
        next('/login')
      }
  }else{
    next()
  }
})

export default router
