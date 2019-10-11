<template>
  <div class="yus-content-page">
    <slot></slot>
    <yus-action-bar v-if="tools.length > 0"
                    :tools="tools"></yus-action-bar>
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
  padding: 12px 12px 2px 12px;
  // padding-bottom: 54px;
}
</style>
