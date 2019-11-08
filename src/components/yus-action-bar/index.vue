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
import { mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters([
      'isCollapse'
    ])
  },
  mounted () {
    this.$bus.$on('GLOBAL_RESIZE', this.initAction)
    this.initAction()
    this.resizeAction()
  },
  activated () {
    this.$bus.$on('GLOBAL_RESIZE', this.initAction)
    this.initAction()
    this.resizeAction()
  },
  deactivated () {
    this.destroyAction()
    this.$bus.$off('GLOBAL_RESIZE', this.resizeAction)
    this.destroyAction()
  },
  destroyed () {
    this.destroyAction()
    this.$bus.$off('GLOBAL_RESIZE', this.resizeAction)
    this.destroyAction()
  },
  methods: {
    resizeAction () {
      if (this.type === 'fixed') {
        const $yusMain = document.querySelector('.yus-main')
        document.querySelector('.yus-content').style.paddingBottom = '54px'
        this.$el.style.width = $yusMain.clientWidth + 'px' // 设置action-bar宽度
      }
    },
    initAction () {
      if (this.type === 'fixed') {
        const $yusMain = document.querySelector('.yus-main')
        $yusMain.appendChild(this.$el)
      }
    },
    destroyAction () {
      if (this.type === 'fixed') {
        document.querySelector('.yus-content').style.paddingBottom = 0
        // if appendToBody is true, remove DOM node after destroy
        if (this.$el && this.$el.parentNode) {
          this.$el.parentNode.removeChild(this.$el)
        }
      }
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
