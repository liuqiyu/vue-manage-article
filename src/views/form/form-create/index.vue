<template>
  <div style="padding: 10px; height: 100%">
    <div class="form-box">
      <el-row>
        <el-col :span="12"
                style="border-right: 1px solid #e1e1e1">
          <div class="form-wrapper">
            <FormCreate :form-create="formCreate"></FormCreate>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="json-wrapper">
            <textarea ref="jsonEditor"
                      class="json-editor"
                      name="json"></textarea>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/rubyblue.css'
import 'codemirror/mode/javascript/javascript'
// import 'codemirror/addon/lint/lint';
// import 'codemirror/addon/lint/json-lint';
import FormCreate from './form-create'
// require('script-loader!jsonlint');
import { formCreate } from './form.js'

export default {
  components: {
    FormCreate
  },
  computed: {
    formCreate () {
      return formCreate
    }
  },
  data () {
    return {
      jsonEditor: null
    }
  },
  mounted () {
    this.jsonEditor = CodeMirror.fromTextArea(this.$refs.jsonEditor, {
      lineNumbers: true,
      mode: 'application/json',
      gutters: ['CodeMirror-lint-markers'],
      theme: 'rubyblue',
      lint: true
    })

    this.jsonEditor.setValue(JSON.stringify(this.formCreate, null, 2))
    this.jsonEditor.on('change', cm => {
      console.log(cm.getValue())
      this.formCreate = JSON.parse(cm.getValue())
      // this.$emit('changed', cm.getValue());
      // this.$emit('input', cm.getValue());
    })
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
