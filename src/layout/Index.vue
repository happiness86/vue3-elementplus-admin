<template>
  <div class="app-layout">
    <header class="app-header">
    </header>
    <section></section>
    <main>
      <keep-alive>
        <router-view :key="cacheKey"></router-view>
      </keep-alive>
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Layout',
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

</style>