<template>
  <div class="content-container">
    <yus-query-table ref="queryTable"
                     :form-fields="formFields"
                     :tools="tools"
                     :tables="tables"></yus-query-table>
                     <!--弹出框-->
    <yus-dialog v-bind="dialogOption"
                :view.sync="dialogOption.view"
                :visible.sync="dialogOption.show">
      <component :is="dialogOption.view"
                 :dialog-data="dialogData"
                 @close="closeDynamicDialog">
      </component>
    </yus-dialog>
  </div>
</template>

<script>
import create from './create'
import detail from './detail'
export default {
  name: 'dashboard',
  components: {
    create,
    detail
  },
  data () {
    return {
      dialogOption: {
        show: false,
        view: null,
        title: '',
        width: '1200px'
      },
      dialogData: {},
      formFields: [
        {
          label: '名称',
          placeholder: '请输入名称',
          columnName: 'name'
        },
        {
          label: '描述',
          placeholder: '请输入描述',
          columnName: 'description'
        }
      ],
      tools: [
        {
          label: '刷新',
          icon: 'iconfont icon-shuaxin1',
          func: () => this.$refs.queryTable.loadTable()
        },
        {
          label: '新增',
          auth: 'addTable',
          icon: 'iconfont icon-xinzeng',
          func: () => this.handleAdd()
        },
        {
          label: '删除',
          auth: 'deleteTable',
          icon: 'iconfont icon-shanchu',
          disabled: () => {
            return !this.multipleSelection.length > 0
          },
          func: () => this.handleDel()
        }
      ],
      tables: {
        url: {
          type: 'get',
          method: '/article/lists'
        },
        options: {
          type: 'selection',
          page: true,
          // 选中后操作
          selectionChange: row => {
            this.multipleSelection = row
            // console.log('选中', this.multipleSelection)
            // if (row.length > 0)
          }
        },
        columns: [
          {
            label: '姓名',
            key: 'name',
            width: '180'
          },
          {
            label: '描述',
            key: 'description',
            width: '180'
          },
          {
            label: '创建时间',
            key: 'create_date'
          }
        ],
        operation: {
          fixed: 'right',
          label: '操作',
          width: '120px',
          // 操作数量
          options: [
            {
              label: '详情',
              // icon: 'iconfont iconwenjian',
              // type: 'icon', // icon 只是图标
              func: row => this.handleDetail(row) // 回调
            },
            {
              label: '删除',
              // icon: 'iconfont iconwenjian',
              // type: 'icon', // icon 只是图标
              func: row => this.handleDelete(row) // 回调
            }
          ]
        }
      },
      multipleSelection: []
    }
  },
  methods: {
    // 新增
    handleAdd () {
      this.showDynamicDialog('create', '新增', '600px')
    },
    // 删除
    handleDelete (row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.delete('/article/delete', {
          data: {
            id: row.id
          }
        })
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        this.$refs.queryTable.loadTable()
      })
    },
    // 详情
    handleDetail (row) {
      this.$set(this.dialogData, 'id', row.id)
      this.showDynamicDialog('detail', '详情', '600px')
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

<style scoped lang="scss">
.content-container {
  padding: 20px !important;
  height: 100%;
}
</style>
