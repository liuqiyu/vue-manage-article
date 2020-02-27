<template>
  <div>
    <div class="yus-dialog__body">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="70px"
               class="demo-ruleForm">
        <el-form-item label="标题 "
                      prop="name">
          <el-input v-model="ruleForm.name"
                    :disabled="!isEdit"></el-input>
        </el-form-item>
        <el-form-item label="昵称"
                      prop="description">
          <el-input type="textarea"
                    v-model="ruleForm.description"
                    maxlength="30"
                    :disabled="!isEdit"></el-input>
        </el-form-item>
        <el-form-item label="创建时间"
                      prop="create_date">
          <el-input v-model="ruleForm.create_date"
                    disabled="true"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="yus-dialog__footer">
      <el-button v-if="isEdit"
                 @click="cancel">取消</el-button>
      <el-button v-if="isEdit"
                 type="primary"
                 @click="confirm">确认</el-button>
      <el-button v-if="!isEdit"
                 type="primary"
                 @click="handleEdit">编辑</el-button>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'detail',
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
      isEdit: false,
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    // 获取数据
    async fetchData () {
      try {
        const res = await this.$http.get('/article/detail', {
          params: {
            id: this.dialogData.id
          }
        })
        res.create_date = moment(res.create_date).format('YYYY-MM-DD HH:mm:ss')
        Object.assign(this.ruleForm, res)
      } catch (e) {
        console.log(e)
      }
    },
    // 保存
    confirm () {
      this.$refs['ruleForm'].validate(async (valid) => {
        if (valid) {
          try {
            await this.$http.put('/article/update', this.ruleForm)
            this.$message({
              message: `编辑成功!`,
              type: 'success'
            })
            this.$emit('close', true)
          } catch (e) {
            this.$message({
              message: `编辑失败!`,
              type: 'error'
            })
          }
        } else {
          return false
        }
      })
    },
    // 编辑
    handleEdit () {
      this.isEdit = true
    },
    // 取消
    cancel () {
      // this.$emit('close')
      this.fetchData()
      this.isEdit = false
    }
  }
}
</script>

<style scoped>
</style>
