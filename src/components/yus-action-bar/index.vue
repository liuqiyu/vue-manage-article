<template>
  <div class="yus-action-bar"
       :class="'is-' + type"
       ref="yusActionBar">
    <yus-tool-bar v-if="action.length > 0"
                  :tools="action">
    </yus-tool-bar>
  </div>
</template>

<script>

export default {
  name: 'yus-action-bar',
  props: {
    action: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: () => 'default'
    }
  },
  mounted () {
    console.log(this.$el)
    if (this.type === 'fixed') {
      const $yusContent = document.querySelector('.yus-main')
      document.querySelector('.yus-content').style.paddingBottom = '54px'
      $yusContent.appendChild(this.$el)
    }
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
  &.is-default {
    padding-bottom: 100px;
  }
  &.is-fixed {
    position: absolute;
    bottom: 0;
    right: 0;
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
