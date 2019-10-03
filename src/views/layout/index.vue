<template>
  <div class="yus-layout">
    <el-container class="yus-container">
      <topbar class="yus-header"></topbar>
      <el-container class="yus-body">
        <div class="yus-menu">
          <sidebar></sidebar>
        </div>
        <el-main class="yus-main">
          <tagsView></tagsView>
          <div class="yus-content">
            <keep-alive :include="cachedViews">
              <router-view></router-view>
            </keep-alive>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import topbar from './topbar'
import sidebar from './sidebar'
import tagsView from './tags-view'
export default {
  name: 'index',
  components: {
    topbar,
    sidebar,
    tagsView
  },
  computed: {
    ...mapGetters([
      'cachedViews'
    ])
  }
}
</script>

<style scoped lang="scss">
@import "~@/style/variable";
.yus-layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .yus-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .yus-header {
      width: 100%;
      height: 50px !important;
      flex: none;
      color: #fff;
      z-index: 111;
      background-image: linear-gradient(-179deg, #225dde 0%, #4a86f0 100%);
    }
    .yus-body {
      flex: 1;
      display: flex;
      flex-direction: row;
      height: 100%;
    }
    .yus-menu {
      position: relative;
      height: 100%;
      width: $sideBarWidth;
      transition: width 0.3s;
      flex: none;
      background: #fff;
      box-shadow: 0 0 8px 0 #cadaf5;
      display: flex;
      flex-direction: column;
      z-index: 99;
    }
    .yus-main {
      flex: 1;
      padding: 0 !important;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      .yus-content {
        flex: 1;
        height: 100%;
        overflow-y: auto;
        background: #f1f5fa;
        height: 100%;
        > * {
          padding: 12px 12px 2px 12px;
          height: 100%;
        }
      }
    }
  }
}
</style>
