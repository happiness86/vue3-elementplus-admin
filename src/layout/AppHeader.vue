<template>
  <div class="app-header">header</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppHeader',
  setup() {
    return {}
  }
})
</script>

<style scoped>
.app-header {
  height: 50px;
  border-bottom: 1px solid #eee;
}
</style>
