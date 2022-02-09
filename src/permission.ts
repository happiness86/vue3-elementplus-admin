import router from '@/router'
import { useUserStore } from '@/stores/user'

export function registerBeforeEach() {
  const userStore = useUserStore()
  router.beforeEach((to, from) => {
    if (userStore.userInfo.username) {
      if (to.path === '/login') {
        return '/'
      } else {
        return true
      }
    } else {
      return true
    }
  })
}