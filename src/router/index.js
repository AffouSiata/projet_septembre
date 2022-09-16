import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'
import register from '../views/register.vue'
import home from '../views/home.vue'
import about from '../views/about.vue'
import contact from '../views/contact.vue'
import details from '../views/details.vue'
const routes = [

  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/details',
    name: 'details',
    component: details
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
