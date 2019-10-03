<template>
  <div>
    <el-card class="box-card">
      <div slot="header"
           class="clearfix">
        <h2>基础</h2>
      </div>
      <yus-query-form :form-fields="formFields"></yus-query-form>

      <el-alert class="message"
                title="使用说明"
                type="success"
                description="根据不同的type 渲染不同的组件"
                show-icon>
      </el-alert>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formFields: [
        {
          label: '姓名',
          placeholder: '请输入姓名',
          columnName: 'name'
        },
        {
          label: '昵称',
          placeholder: '请输入昵称',
          columnName: 'nickname'
        },
        {
          label: '年龄',
          placeholder: '请输入年龄',
          columnName: 'age'
        },
        {
          label: '性别',
          type: 'select',
          placeholder: '请选择性别',
          columnName: 'select',
          options: [
            {
              value: 0,
              label: '全部'
            },
            {
              value: 1,
              label: '男'
            },
            {
              value: 2,
              label: '女'
            }
          ]
        },
        // 下拉框
        {
          label: '下拉框',
          type: 'select',
          placeholder: '请选择下拉框',
          columnName: 'select1',
          multiple: true,
          options: [
            {
              value: 1,
              label: '你好1'
            },
            {
              value: 2,
              label: '你好2'
            }
          ]
        }
      ]
    }
  },
  methods: {
    notify (message) {
      this.$notify({
        title: '成功',
        message: message,
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
