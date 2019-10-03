<template>
  <div class="sidebar-container">
    <el-scrollbar class="scrollbar-wrapper">

      <el-menu :default-active="$route.path"
               class="el-menu-vertical-demo"
               :router="true"
               @open="handleOpen"
               @close="handleClose"
               background-color="#fff"
               text-color="#1D2331"
               :collapse="isCollapse"
               active-text-color="#4676E5">
        <nav-item v-for="(route, index) in menuRoutes"
                  :key="index"
                  :item="route"
                  :base-path="route.path"></nav-item>
      </el-menu>
    </el-scrollbar>
    <!-- <div class="collapse-trigger"
         @click="menuTrigger">
      <span ref="collapseIcon"
            class="iconfont icon-shouqi"></span>
    </div> -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import NavItem from './nav-item'
export default {
  name: 'navbar',
  components: {
    NavItem
  },
  computed: {
    ...mapGetters([
      'menuRoutes',
      'isCollapse'
    ])
  },
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      showDropMenu: false
    }
  },
  methods: {
    ...mapMutations([
      'IS_COLLAPSE'
    ]),
    menuTrigger () {
      this.IS_COLLAPSE()
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="scss">
.sidebar-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .scrollbar-wrapper {
    flex: 1;
    height: 100%;
    margin: 0 !important;
    overflow-x: hidden;
    overflow-y: auto;
    border-bottom: 1px solid #dee9fc;
    /deep/ .el-scrollbar__wrap {
      overflow-x: hidden !important;
    }
  }
  .collapse-trigger {
    position: relative;
    flex: none;
    width: 100%;
    height: 34px;
    background-image: linear-gradient(
      90deg,
      #e1e7f3 14%,
      rgba(234, 234, 234, 0) 100%
    );
    span {
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      width: 64px;
      height: 34px;
      background: #fff;
      line-height: 34px;
      text-align: center;
      cursor: pointer;
      &.retract {
        transform: rotateY(180deg);
        -webkit-transform: rotateY(180deg); /* Safari 与 Chrome */
      }
    }
  }
}
</style>
