<template>
  <div class="yus-action-bar fixed"
       ref="yusActionBar">
    <yus-tool-bar v-if="tools.length > 0"
                  :tools="tools">
    </yus-tool-bar>
  </div>
</template>

<script>

export default {
  name: 'yus-action-bar',
  props: {
    tools: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    this.$refs.yusActionBar.style.width = this.$refs.yusActionBar.clientWidth + 'px'
    this.$refs.yusActionBar.style.position = 'fixed'
    this.$refs.yusActionBar.style.right = 0
    this.$refs.yusActionBar.style.bottom = 0
  }
}
</script>

<style lang="scss" scoped>
@import "~@/style/variable";
.yus-action-bar {
  &.fixed {
    // position: absolute;
    z-index: 11;
    background: #ffffff;
    box-shadow: 0 0 8px 0 #cadaf5;
    width: 100%;
    height: 54px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    text-align: right;
    padding-right: 12px;
  }
}
</style>
