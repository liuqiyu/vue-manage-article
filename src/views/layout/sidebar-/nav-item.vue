<template>
  <div v-if="!item.hidden"
       class="menu-wrapper">
    <el-menu-item v-if="hasOneShowingChild(item.children, item)"
                  :index="resolvePath(item.path)">
      <i class="icon iconfont"
         :class="onlyOneChild.meta.icon"></i>
      <span slot="title">{{onlyOneChild.meta.title}}</span>
    </el-menu-item>
    <el-submenu v-else
                :index="resolvePath(item.path)"
                popper-append-to-body>
      <template slot="title">
        <i class="icon iconfont"
           :class="item.meta.icon"></i>
        <span slot="title">{{item.meta.title}}</span>
      </template>
      <nav-item v-for="(cell, key) in item.children"
                :key="key"
                :item="cell"
                :is-nest="true"
                :base-path="resolvePath(cell.path)"></nav-item>
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
export default {
  name: 'nav-item',
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    },
    // 不是根路由
    isNest: {
      type: Boolean
    }
  },
  methods: {
    hasOneShowingChild (children = [], item) {
      const showingChildren = children.filter(item => {
        return !item.hidden
      })
      console.log(showingChildren)
      if (!this.isNest && showingChildren.length === 1) {
        if (item.showRoot) {
          this.onlyOneChild = item
          return false
        } else {
          this.onlyOneChild = showingChildren[0]
          return true
        }
      }

      if (this.isNest && showingChildren.length === 0) {
        this.onlyOneChild = item
        return true
      }
      return false
    },
    resolvePath (routePath) {
      if (this.isNest) {
        return path.resolve(this.basePath)
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
