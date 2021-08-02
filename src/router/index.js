import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import Case from '../components/Case.vue'
import Task from '../components/Task.vue'
import Jenkins from '../components/Jenkins.vue'
import Report from '../components/Report.vue'



const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(localtion) {
  return originalPush.call(this, localtion).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path:'/',
    name:'SignIn',
    component:SignIn
  },
  {
    path:'/sign-up',
    name:'SignUp',
    component:SignUp
  },
  {
    path:'/Case',
    name:'Case',
    component:Case
  },
  {
    path:'/Task',
    name:'Task',
    component:Task
  },
  {
    path:'/Jenkins',
    name:'Jenkins',
    component:Jenkins
  },
  {
    path:'/Report',
    name:'Report',
    component:Report
  },

]

const router = new VueRouter({
  routes
})

export default router
