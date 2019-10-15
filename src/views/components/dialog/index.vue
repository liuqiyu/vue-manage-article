<template>
  <yus-content-page>
    <el-card class="box-card">
      <div slot="header"
           class="clearfix">
        <h2>基础</h2>
      </div>
      <el-button v-auth="'deleteTable'"
                 @click="click">弹窗</el-button>

      <el-alert class="message"
                title="使用说明"
                type="success"
                description="可拖动的动态组件弹窗"
                show-icon>
      </el-alert>
    </el-card>

    <!--弹出框-->
    <yus-dialog v-bind="dialogOption"
                @close="closeDynamicDialog"
                :view.sync="dialogOption.view"
                :visible.sync="dialogOption.show">
      <component :is="dialogOption.view"
                 :dialog-data="dialogData"
                 @close="closeDynamicDialog">
      </component>
    </yus-dialog>
  </yus-content-page>
</template>

<script>
import TestDialog from './test-dialog'

export default {
  components: {
    TestDialog
  },
  mounted () {
    this.fetchData()
  },
  data () {
    return {
      dialogOption: {
        show: false,
        view: null,
        title: '',
        width: '1200px'
      },
      dialogData: {}
    }
  },
  methods: {
    async fetchData () {
      const data = await this.$http.post('/getTable')
      console.log(data)
    },
    click () {
      this.showDynamicDialog('TestDialog', '弹窗', '450px')
    },
    showDynamicDialog (view, title, width = '1200px') {
      this.dialogOption.show = true
      this.dialogOption.view = view
      this.dialogOption.title = title
      this.dialogOption.width = width
    },
    closeDynamicDialog (boolean) {
      if (boolean) {
        this.$refs.queryTable.loadTable()
      }
      this.dialogOption.show = false
      this.dialogOption.view = null
      this.dialogOption.title = null
      this.dialogOption.width = 0
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
