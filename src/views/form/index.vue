<!--
 * @Description:
 * @Author: liuqiyu
 * @Date: 2019-11-14 17:14:57
 * @LastEditors  : liuqiyu
 * @LastEditTime : 2019-12-27 15:09:39
 -->
<template>
  <div style="padding: 10px; height: 100%">
    <div class="form-box">
      <AspFormCreate ref="formCreate"
                     :form-create="formCreate"
                     @on-tool-submit-click="submit"
                     @on-tool-next-click="next"></AspFormCreate>
    </div>
  </div>
</template>

<script>
import AspFormCreate from './form-create'
export default {
  components: {
    AspFormCreate
  },
  data () {
    return {
      formCreate1: {}
    }
  },
  created () {
    this.formCreate = require('./addTab1.json')
    setTimeout(() => {
      this.$refs.formCreate.setOptions('a', [
        {
          value: 2,
          label: 2
        }
      ])
      this.$refs.formCreate.setValue('cmmdtBg', 1233)
      this.$refs.formCreate.setProps('cmmdtBg', 'disabled', true)
    })
  },
  methods: {
    submit ({ model, item, type }) {
      console.log(model, item, type)
    },
    next ({ model, item, type }) {
      console.log(model, item, type)
    }
  }
}
</script>

<style lang="scss" scoped>
.form-box {
  width: 100%;
  height: 100%;
  background: #fff;
  border: 1px solid #dee8f8;
  .el-row {
    height: 100%;
    .el-col {
      height: 100%;
    }
  }
  .form-wrapper {
    height: 100%;
    padding: 20px;
    overflow: auto;
  }
  .json-wrapper {
    height: 100%;
    padding: 20px;
  }
}

/deep/ .CodeMirror {
  height: 700px;
  min-height: 300px;
}

/deep/.CodeMirror-scroll {
  min-height: 300px;
}
/deep/ .cm-s-rubyblue span.cm-string {
  color: #f08047;
}
</style>
