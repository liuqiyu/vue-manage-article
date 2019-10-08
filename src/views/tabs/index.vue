<template>
  <div class="content-container">
    <yus-content-item>
      <el-tabs type="border-card"
               v-model="activeName">
        <el-tab-pane v-for="(item, index) in TabList"
                     :label="item.label"
                     :name="item.name"
                     :key="index">
          <keep-alive>
            <component v-if="item.name === activeName"
                       :is="activeName"></component>
          </keep-alive>
        </el-tab-pane>
      </el-tabs>
    </yus-content-item>
  </div>
</template>

<script>
import sz from './sz'
import sh from './sh'
import bj from './bj'

export default {
  name: 'tabs',
  data () {
    return {
      TabList: [
        {
          label: '深圳',
          name: 'sz'
        },
        {
          label: '上海',
          name: 'sh'
        },
        {
          label: '北京',
          name: 'bj'
        }
      ],
      activeName: 'sz'
    }
  },
  watch: {
    activeName (val) {
      this.activeName = val
    }
  },
  components: {
    sz,
    sh,
    bj
  }
}
</script>

<style lang="scss" scoped>
.content-page-white {
  background: #fff;
}
</style>
