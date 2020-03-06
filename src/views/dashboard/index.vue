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
import moment from 'moment'
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
          func: () => {
            let arr = []
            this.multipleSelection.forEach(item => {
              arr.push(item.id)
            })
            this.handleDelete(arr.join())
          }
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
            width: '380'
          },
          {
            label: '创建时间',
            key: 'create_date',
            sort: true
          },
          {
            label: '最后修改时间',
            key: 'update_date',
            sort: true
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
              func: row => {
                this.handleDelete(row.id)
              }
            }
          ]
        },
        formatter: {
          create_date: (row) => {
            return moment(row.create_date).format('YYYY-MM-DD HH:mm:ss')
          },
          update_date: (row) => {
            return moment(row.update_date).format('YYYY-MM-DD HH:mm:ss')
          }
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
    handleDelete (id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        await this.$http.delete('/article/delete', {
          data: {
            id
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
