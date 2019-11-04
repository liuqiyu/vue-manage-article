<template>
  <yus-content-page>
    <el-tabs class="clipboard"
             v-model="activeName">
      <el-tab-pane label="单击复制"
                   name="click">
        <el-input placeholder="请单击复制"
                  v-model="input">
          <el-button slot="append"
                     v-click-copy="'单击复制的内容'">单击复制</el-button>
        </el-input>
      </el-tab-pane>
      <el-tab-pane label="双击复制"
                   name="dblclick">
        <el-input placeholder="请双击复制"
                  v-model="input2">
          <el-button slot="append"
                     v-dblclick-copy="'双击复制的内容'">双击复制</el-button>
        </el-input>
      </el-tab-pane>
    </el-tabs>
  </yus-content-page>
</template>

<script>
export default {
  name: 'clipboard',
  data () {
    return {
      activeName: 'click',
      input: '请单击复制',
      input2: '请双击复制'
    }
  }
}
</script>

<style lang="scss" scoped>
.clipboard {
  /deep/ .el-input {
    width: 300px;
  }
}
</style>
