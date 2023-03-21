import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './HelloWorld.vue'
import HomePage from './HomePage.vue'
import InputShinchoku from "./InputShinchoku.vue";
import CreatePage from './CreatePage.vue'

const routes = [
  {
    path: '/',
    name: 'helloworld',
    component: HelloWorld
  },

  {
    path: '/shinchoku',
    name: 'pincushion',
    component: InputShinchoku
  },

  {
    path: '/home',
    name: 'home',
    component: HomePage
  },

  {
    path: '/create',
    name: 'create',
    component: CreatePage
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
