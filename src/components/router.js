import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './HelloWorld.vue'
import HomePage from './HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'helloworld',
    component: HelloWorld
  },

  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router