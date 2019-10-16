<template>
  <div class="yus-content-page"
       :class="'is-' + (action.type || 'default')">
    <div class="content">
      <slot></slot>
      <yus-action-bar :type="action.type"
                      v-if="action.tools.length > 0 && !action.type"
                      :tools="action.tools"></yus-action-bar>
    </div>
    <yus-action-bar :type="action.type"
                    v-if="action.tools.length > 0 && action.type === 'fixed'"
                    :tools="action.tools"></yus-action-bar>
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
    },
    action: {
      type: Object,
      default: () => ({
        type: '',
        tools: []
      })
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

  &.is-fixed {
    height: 100%;
    padding: 0;
    .content {
      height: 100%;
      overflow-y: auto;
      padding: 12px 12px 58px 12px;
    }
  }
}
</style>
