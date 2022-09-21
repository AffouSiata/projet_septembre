import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'
import register from '../views/register.vue'
import home from '../views/home.vue'
import about from '../views/about.vue'
import contact from '../views/contact.vue'
import details from '../views/details.vue'
import admin from '../views/admin.vue'
import achat from '../views/achat.vue'
import location from '../views/location.vue'
const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },

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
    path: '/achat',
    name: 'achat',
    component: achat
  },
  {
    path: '/location/',
    name: 'location',
    component: location,
  },
  {
    path: '/details/:id',
    name: 'details',
    component: details,
    props:true
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
