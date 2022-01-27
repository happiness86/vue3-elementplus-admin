import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      /** @type {{username: string, password: string}}  */
      userInfo: {}
    }
  },
  actions: {
    saveUserInfo () {
      this.userInfo = {
        username: 'test',
        password: 'test'
      }
    }
  }
})