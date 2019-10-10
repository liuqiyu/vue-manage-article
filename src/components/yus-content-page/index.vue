<template>
  <div class="yus-content-page">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'yus-content-page',
  props: {
    options: {
      type: Object,
      default: () => { }
    },
    tools: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    title () {
      return this.$route.meta.title
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/style/variable";
.yus-content-page {
  position: relative;
  padding-bottom: 54px;
}
</style>
