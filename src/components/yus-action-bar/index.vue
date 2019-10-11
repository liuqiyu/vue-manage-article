<template>
  <div class="yus-action-bar"
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
    // this.$nextTick(() => {
    //   console.log(document.querySelector('.yus-content').clientWidth)
    //   this.$refs.yusActionBar.style.width = document.querySelector('.yus-content').clientWidth + 'px'
    //   // this.$refs.yusActionBar.style.position = 'fixed'
    //   this.$refs.yusActionBar.style.left = 0
    //   this.$refs.yusActionBar.style.bottom = 0
    // })
  }
}
</script>

<style lang="scss" scoped>
@import "~@/style/variable";
.yus-action-bar {
  text-align: center;
  /deep/.tool-list {
    text-align: center;
  }
  &.fixed {
    position: absolute;
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
