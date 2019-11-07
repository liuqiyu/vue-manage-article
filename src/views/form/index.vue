<!--
 * @Description:
 * @Author: liuqiyu
 * @Date: 2019-10-11 11:13:04
 * @LastEditors: liuqiyu
 * @LastEditTime: 2019-11-07 14:42:33
 -->
<template>
  <yus-content-page>
    <yus-content-row>
      <yus-content-cell :title="'使用Keep-alive实现缓存'">
        <el-form ref="form"
                 class="yus-table-form"
                 :label-position="labelPosition"
                 :model="form"
                 :rules="rules"
                 label-width="100px">
          <el-row>
            <el-col :span="12">
              <el-form-item label="活动名称"
                            prop="name">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="活动名称"
                            prop="name">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="活动名称"
                            prop="name">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </yus-content-cell>
    </yus-content-row>
    <yus-action-bar :action="action"></yus-action-bar>
  </yus-content-page>
</template>

<script>
// import { getTest } from '@/api'
export default {
  name: 'asp-form',
  data () {
    return {
      labelPosition: 'right',
      action: [
        {
          label: '返回列表'
        }
      ],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    submitForm () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm () {
      this.$refs['form'].resetFields()
    }
  },
  mounted () {
    // getTest()
  }
}
</script>

<style lang="scss" scoped>
</style>
