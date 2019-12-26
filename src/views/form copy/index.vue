<!--
 * @Description:
 * @Author: liuqiyu
 * @Date: 2019-11-14 17:14:57
 * @LastEditors  : liuqiyu
 * @LastEditTime : 2019-12-25 09:47:09
 -->
<template>
  <div style="padding: 10px; height: 100%">
    <div class="form-box">
      <el-row>
        <el-col :span="12"
                style="border-right: 1px solid #e1e1e1">
          <div class="form-wrapper">
            <template11></template11>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="json-wrapper">
            <draggable :list="formCreate1">
              <transition-group type="transition"
                                :name="'flip-list'"
                                tag="div">

              </transition-group>
            </draggable>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import template11 from './form-create/form-create/template'
import { formCreate } from './form-create/form.js'

export default {
  components: {
    template11,
    draggable
  },
  computed: {
    formCreate () {
      return formCreate
    }
  },
  data () {
    return {
      jsonEditor: null,
      formCreate1: []
    }
  },
  mounted () {
  },
  methods: {
    handleChange (val) {
      console.log(val)
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
