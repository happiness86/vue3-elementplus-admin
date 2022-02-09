import { defineStore } from 'pinia'

export interface UserInfo {
  username: string
  password: string
}
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: {} as UserInfo
    }
  },
  actions: {
    saveUserInfo(userInfo: UserInfo) {
      if (!userInfo.username && !userInfo.password) {
        this.userInfo = userInfo
      }
    }
  }
})