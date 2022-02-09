import { RouteRecordRaw, RouterView } from 'vue-router'

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/404',
    component: () => RouterView
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue')
  }
]
