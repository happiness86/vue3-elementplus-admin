<template>
  <svg aria-hidden="true">
    <use :href="symbolId" :fill="color"></use>
  </svg>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#333'
    }
  },
  computed: {
    symbolId() {
      return this.prefix + '-' + this.name
    }
  }
})
</script>

<style scoped>

</style>