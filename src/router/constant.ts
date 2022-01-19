import {RouteRecordRaw, RouterView } from 'vue-router';

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/404',
    component: () => RouterView
  },
  {
    path: '/login',
    component: () => RouterView
  }
]