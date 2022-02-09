<template>
  <div class="app-layout">
    <el-container style="height: 100%">
      <el-aside width="200px" style="height: 100%">
        <el-scrollbar>
          <app-menu></app-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header>
          <app-header></app-header>
        </el-header>
        <el-main>
          <el-scrollbar>
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './AppHeader.vue'
import AppMenu from './AppMenu.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    AppHeader,
    AppMenu
  },
  setup() {
    const route = useRoute()
    const cacheKey = route.fullPath
    return {
      cacheKey
    }
  }
})
</script>

<style scoped>
.app-layout {
  height: 100vh;
}
</style>
