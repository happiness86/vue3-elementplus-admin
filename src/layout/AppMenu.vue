<template>
  <div class="app-menu">Aside</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppMenu',
  setup() {
    return {}
  }
})
</script>

<style scoped>
.app-menu {
  border-right: 1px solid #eee;
}
</style>
