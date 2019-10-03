<template>
  <div>
    <el-card class="box-card">
      <div slot="header"
           class="clearfix">
        <h2>基础</h2>
      </div>
      <yus-tool-bar :tools="tools"></yus-tool-bar>
    </el-card>

    <el-card class="box-card">
      <div slot="header"
           class="clearfix">
        <h2>置灰</h2>
      </div>
      <yus-tool-bar :tools="toolsDisabled"></yus-tool-bar>

      <el-alert class="message"
                title="使用说明"
                type="success"
                description="置灰提供两种方式：第一种是直接 diabled: true，第二种是通过回调函数判定的。"
                show-icon>
      </el-alert>
    </el-card>

    <el-card class="box-card">
      <div slot="header"
           class="clearfix">
        <h2>权限</h2>
      </div>
      <yus-tool-bar :tools="toolsAuth"></yus-tool-bar>

      <el-alert class="message"
                title="使用说明"
                type="success"
                description="根据当前用户判定是否有按钮权限。"
                show-icon>
      </el-alert>
    </el-card>

  </div>
</template>

<script>
export default {
  data () {
    return {
      tools: [
        {
          label: '刷新',
          type: 'text',
          icon: 'iconfont icon-shuaxin1',
          // type: 'success',
          func: () => {
            this.notify()
          }
        },
        {
          label: '新增',
          auth: 'addTable',
          icon: 'iconfont icon-xinzeng',
          type: 'warning',
          func: () => {
            this.notify('新增的方法')
          }
        },
        {
          label: '删除',
          auth: 'deleteTable',
          icon: 'iconfont icon-shanchu',
          func: () => {
            this.notify('删除的方法')
          }
        }
      ],
      toolsDisabled: [
        {
          label: '置灰 - 字符串',
          icon: 'iconfont icon-shuaxin1',
          disabled: true,
          func: () => {
            this.notify('置灰 - 字符串')
          }
        },
        {
          label: '置灰 - 方法',
          icon: 'iconfont icon-shuaxin1',
          disabled: () => {
            return true
          },
          func: () => {
            this.notify('置灰 - 字符串')
          }
        }
      ],
      toolsAuth: [
        {
          label: '刷新',
          icon: 'iconfont icon-shuaxin1',
          auth: 'refresh',
          func: () => {
            this.notify('刷新的方法')
          }
        },
        {
          label: '新增',
          auth: 'addTable',
          icon: 'iconfont icon-xinzeng',
          func: () => {
            this.notify('新增的方法')
          }
        },
        {
          label: '删除',
          auth: 'deleteTable',
          icon: 'iconfont icon-shanchu',
          func: () => {
            this.notify('删除的方法')
          }
        }
      ]
    }
  },
  methods: {
    notify (message) {
      this.$notify({
        title: '成功',
        message: message || 123,
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  margin-bottom: 20px;
  .message {
    margin-top: 20px;
  }
}
</style>
