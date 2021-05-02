import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import User from '../views/User.vue'
import EditUser from '../views/EditUser'
import Dashboard from '../views/Dashboard'
import Offers from '../views/Offers'
import Product from '../views/Product'
import EditProduct from '../views/EditProduct'
import Users from '../views/Users'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    beforeEnter(to, from, next){
      if(localStorage.getItem('token')){
        localStorage.removeItem('token');
      }
      next();
    }
  },
  {
    path: '/account',
    name: 'User',
    component: User,
    beforeEnter(to, from, next){
      if (!localStorage.getItem('token')) {
         next({
          name:"Login"
        })
      }
      else {
        next();
      }
    }
  },
  {
    path: '/edit_profile',
    name: 'EditUser',
    component: EditUser,
    beforeEnter(to, from, next){
      if (!localStorage.getItem('token')) {
         next({
          name:"Login"
        })
      }
      else {
        next();
      }
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter(to, from, next){
      if (!localStorage.getItem('token')) {
         next({
          name:"Login"
        })
      }
      else {
        next();
      }
    }
  },
  {
    path: '/offers',
    name: 'Offers',
    component: Offers,
    beforeEnter(to, from, next){
      if (!localStorage.getItem('token')) {
         next({
          name:"Login"
        })
      }
      else {
        next();
      }
    }
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    beforeEnter(to, from, next){
      if (!localStorage.getItem('token')) {
         next({
          name:"Login"
        })
      }
      else {
        next();
      }
    }
  },
  {
    path: '/editProduct',
    name: 'EditProduct',
    component: EditProduct,
    beforeEnter(to, from, next){
      if (!localStorage.getItem('token')) {
         next({
          name:"Login"
        })
      }
      else {
        next();
      }
    }
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    beforeEnter(to, from, next){
      if (!localStorage.getItem('token')) {
         next({
          name:"Login"
        })
      }
      else {
        next();
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
