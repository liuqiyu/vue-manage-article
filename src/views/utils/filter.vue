<template>
  <yus-content-page>
    <el-card class="box-card">
      <div slot="header"
           class="clearfix">
        <h2>过滤器</h2>
      </div>
      <div>
        <el-divider content-position="left">date YYYY-MM-DD</el-divider>
        <span>{{new Date() | date}}</span>
        <el-divider content-position="left">time 年月日时分秒 YYYY-MM-DD HH:mm:ss</el-divider>
        <span>{{new Date() | time}}</span>
        <el-divider content-position="left">minute 年月日时分 YYYY-MM-DD HH:mm</el-divider>
        <span>{{new Date() | minute}}</span>
        <el-divider content-position="left">second 时分秒 HH:mm:ss</el-divider>
        <span>{{new Date() | second}}</span>
        <el-divider content-position="left">month 年月 YYYY-MM</el-divider>
        <span>{{new Date() | month}}</span>
        <el-divider content-position="left">money 金额人民币</el-divider>
        <span>{{13213213| money}}</span>
        <el-divider content-position="left">thousands 千位分隔符</el-divider>
        <span>{{13213213| thousands}}</span>
        <el-divider content-position="left">lookup 数据字典</el-divider>
        <span>{{0 | lookup('/getGender')}} 、 异步失败</span>
      </div>
    </el-card>
  </yus-content-page>
</template>

<script>
export default {
  data () {
    return {
      activeNames: ['1']
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.lists {
  background: #fff;
  padding: 20px;
}
</style>
