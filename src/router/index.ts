import {createRouter, createWebHistory } from 'vue-router'
import { constantRoutes } from './constant'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...constantRoutes
  ],
})
