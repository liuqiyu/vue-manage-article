<!--
 * @Description:
 * @Author: liuqiyu
 * @Date: 2019-11-14 17:14:57
 * @LastEditors: liuqiyu
 * @LastEditTime: 2019-11-19 11:59:10
 -->
<template>
  <el-card class="box-card console-wrapper">
    <div slot="header"
         class="clearfix">
      <span>d</span>
    </div>
    <div class="chart-wrapper">
      <yus-query-table ref="queryTable"
                       :form-fields="formFields"
                       :tools="tools"
                       :tables="tables"></yus-query-table>
    </div>
  </el-card>

</template>

<script>
export default {
  name: 'd',
  data () {
    return {
      formFields: [
        {
          label: '姓名',
          type: 'text',
          placeholder: '请输入姓名',
          defaultValue: '刘',
          columnName: 'username'
        },
        {
          label: '昵称',
          type: 'text',
          placeholder: '请输入昵称',
          defaultValue: 0,
          columnName: 'nickname'
        },
        {
          label: '年龄',
          type: 'text',
          placeholder: '请输入年龄',
          columnName: 'age'
        },
        {
          label: '性别',
          type: 'text',
          placeholder: '请输入性别',
          columnName: 'gender'
        },
        {
          label: '地址',
          type: 'text',
          placeholder: '请输入地址',
          columnName: 'address'
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
          type: 'POST',
          method: '/getTable',
          obj: {
            username: 'username'
          }
        },
        options: {
          type: 'selection',
          // page: true,
          defaultSort: {
            prop: 'name',
            order: 'descending'
          },
          initHttp: true,
          // 选中后操作
          selectionChange: row => {
            this.multipleSelection = row
            // console.log('选中', this.multipleSelection)
          }
        },
        columns: [
          {
            label: '姓名',
            key: 'name',
            width: '180',
            sort: true,
            copy: true
          },
          {
            label: '昵称',
            key: 'nickname',
            width: '180'
          },
          {
            label: '年龄',
            key: 'age',
            width: '180',
            sort: true
          },
          {
            label: '性别',
            key: 'gender',
            width: '180'
          },
          {
            label: '地址',
            key: 'address'
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
              func: row => this.handleUpdate(row) // 回调
            },
            {
              label: '删除',
              // auth: 'deleteTable1',
              // icon: 'iconfont iconwenjian',
              // type: 'icon', // icon 只是图标
              func: row => this.handleDel(row) // 回调
            }
          ]
        }
      },
      multipleSelection: []
    }
  },
  methods: {
    handleUpdate (row) {
      this.$router.push({
        path: '/table/page/details/1'
      })
    },
    handleAdd () {
      this.$router.push({
        path: '/table/page/add'
      })
    },
    handleDel (row) {
      this.$confirm('删除已选择数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          message: '删除成功！',
          type: 'success'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-session {
  width: 100%;
  height: 100%;
}
.chart-wrapper {
  width: 100%;
  padding: 20px;
  height: 400px;
  background: #fff;
}
</style>
