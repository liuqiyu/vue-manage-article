<template>
  <div>
    <div class="yus-dialog__body">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="60px"
               class="demo-ruleForm">
        <el-form-item label="标题 "
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
  name: 'create',
  props: {
    dialogData: {
      type: Object
    }
  },
  data () {
    return {
      ruleForm: {
        name: '',
        description: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    Object.assign(this.ruleForm, this.dialogData.data)
  },
  methods: {
    confirm () {
      this.$refs['ruleForm'].validate(async (valid) => {
        if (valid) {
          try {
            const res = await this.$http.post('/article/create', this.ruleForm)
            console.log(res)
            this.$emit('close', true)
            this.$message({
              message: `新增成功!`,
              type: 'success'
            })
          } catch (e) {
            this.$message({
              message: `新增失败!`,
              type: 'error'
            })
          }
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
