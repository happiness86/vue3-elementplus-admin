<template>
  <div class="login"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUserStore } from '@/stores/user'

export default defineComponent({
  name: 'Login',
  setup() {
    const userStore = useUserStore()
    const userInfo = userStore.userInfo
    userStore.saveUserInfo()
  }
})
</script>

<style scoped></style>
