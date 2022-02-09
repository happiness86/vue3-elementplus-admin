import { createRouter, createWebHistory } from 'vue-router'
import { constantRoutes } from './constant'
import { permissionRoutes } from './permissionRoutes'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...constantRoutes,
    ...permissionRoutes
  ],
})

export default router
