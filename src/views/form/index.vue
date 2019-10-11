<template>
  <yus-content-page :tools="tools">
    <yus-content-row>
      <yus-content-cell :title="'使用Keep-alive实现缓存'">
        <el-form ref="form"
                 class="yus-table-form"
                 :model="form"
                 label-width="80px">
          <el-row>
            <el-col :span="12">
              <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </yus-content-cell>
    </yus-content-row>
  </yus-content-page>
</template>

<script>

export default {
  name: 'form',
  data () {
    return {
      tools: [
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
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
