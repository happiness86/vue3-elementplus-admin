import { RouteRecordRaw } from 'vue-router'

export const permissionRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    component: () => import('@/layout/index.vue')
  }
]
