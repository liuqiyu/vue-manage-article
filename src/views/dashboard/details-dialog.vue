<template>
  <div>
    <div class="yus-dialog__body">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="60px"
               class="demo-ruleForm">
        <el-form-item label="标题"
                      prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="昵称"
                      prop="description">
          <el-input type="textarea"
          v-model="ruleForm.description"
          maxlength="30"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="yus-dialog__footer">
      <el-button @click="cancel">取消</el-button>
      <el-button type="primary"
                 @click="confirm">确认</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test-dialog',
  props: {
    dialogData: {
      type: Object
    }
  },
  data () {
    return {
      ruleForm: {
        name: '',
        nickname: '',
        age: '',
        gender: '',
        address: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入地址', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    Object.assign(this.ruleForm, this.dialogData.data)
  },
  methods: {
    confirm () {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.$emit('close')
          this.$message({
            message: `${this.dialogData.label}成功!`,
            type: 'success'
          })
        } else {
          return false
        }
      })
    },
    cancel () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
</style>
