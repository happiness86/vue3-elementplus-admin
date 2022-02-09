<template>
  <div class="login-wrapper">
    <el-form :model="form" :label-width="100">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useUserStore, UserInfo } from '@/stores/user'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const userStore = useUserStore()
    const router = useRouter()
    const form = ref<UserInfo>({
      username: '',
      password: ''
    })
    // 登录
    const login = () => {
      // TODO
      debugger
      if (form.value.username === 'admin') {
        userStore.saveUserInfo(form.value)
        router.push('/')
      }
    }
    return {
      form,
      login
    }
  }
})
</script>

<style scoped></style>
