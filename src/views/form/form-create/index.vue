<!--
 * @Author: liuqiyu
 * @Date: 2019-12-20 10:39:54
 * @LastEditTime : 2019-12-26 18:50:28
 * @LastEditors  : liuqiyu
 * @Description: In User Settings Edit
 * @FilePath: \pcc_front1\src\views\pcc\commodity\add\create\common\form-create\query-form.vue
 -->
<template>
  <div class="form-create">
    <el-form ref="validateForm"
             :model="model"
             :inline="true"
             size="mini"
             label-position="left">
      <el-collapse v-model="activeName">
        <el-collapse-item v-for="(item, index) in formList"
                          :name="index"
                          :key="index">
          <template v-if="formList.length > 0">
            <span slot="title">
              <i class="el-icon-tickets"></i>{{ item.title }}
            </span>
            <el-row>
              <el-col v-for="(cell, key) in item.formFields"
                      :key="key"
                      :span="cell.span || 12">
                <form-item v-show="cell.show === undefined ? true : cell.show"
                           :item="cell"
                           v-model="model[cell.columnName]"
                           @on-events="onFormEvents">
                </form-item>
              </el-col>
            </el-row>
          </template>
        </el-collapse-item>
      </el-collapse>
    </el-form>
    <toolList :tool-list="toolList"
              @on-events="onToolEvents"></toolList>
  </div>
</template>

<script>
import formItem from './form-item'
import toolList from './tool-list'
export default {
  name: 'AspFormCreate',
  components: {
    formItem,
    toolList
  },
  props: {
    formCreate: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      model: {},
      activeName: [0],
      formList: [],
      toolList: []
    }
  },
  watch: {
    formCreate (val) {
      this.createModel(val)
    }
  },
  created () {
    this.createModel()
  },
  methods: {
    onReset () {
      this.createModel()
      this.$emit('reset')
    },
    getModel () {
      return this.model
    },
    createModel (formCreate) {
      this.formList = this.formCreate.formList || []
      this.toolList = this.formCreate.toolList || []
      this.toolList.forEach((item, index) => {
        this.$set(this.toolList[index], 'loading', false)
      })

      if (this.formList.length <= 0) {
        return false
      }
      const ARRAY_ITEM = ['datetimerange', 'daterange', 'checkbox']
      this.formList.forEach((cell) => {
        cell.formFields.forEach(item => {
          if (item.show === undefined || item.show) {
            if (ARRAY_ITEM.indexOf(item.type) >= 0 || item.multiple) {
              this.$set(this.model, item.columnName, item.defaultValue || [])
            } else if (item.type === 'dateList') {
              this.$set(this.model, item.columnName, item.defaultValue || [null, null])
            } else if (item.type === 'selectTree') {
              this.$set(this.model, item.columnName, item.defaultCheckedKeys || [])
            } else {
              this.$set(this.model, item.columnName, item.defaultValue || '')
            }
          }
        })
      })
    },
    // 赋值
    setValue (columnName, value) {
      this.$set(this.model, columnName, value)
    },
    // options 赋值
    setOptions (columnName, value) {
      this.formList.forEach((cell, index) => {
        cell.formFields.forEach((item, k) => {
          if (item.show === undefined || item.show) {
            if (item.columnName === columnName) {
              this.$set(this.formList[index].formFields[k], 'options', value)
            }
          }
        })
      })
    },
    // props参数
    setProps (columnName, key, value) {
      this.formList.forEach((cell, index) => {
        cell.formFields.forEach((item, k) => {
          if (item.show === undefined || item.show) {
            if (item.columnName === columnName) {
              // 避免props不存在报错
              if (!this.formList[index].formFields[k].props) {
                this.$set(this.formList[index].formFields[k], 'props', {})
              }
              this.$set(this.formList[index].formFields[k].props, key, value)
            }
          }
        })
      })
    },
    // 设置按钮loading
    setToolLoading (columnName, boolean) {
      this.toolList.forEach((item, index) => {
        console.log(item.columnName === columnName)
        if (item.columnName === columnName) {
          this.$set(this.toolList[index], 'loading', boolean)
        }
      })
      console.log(this.toolList)
    },
    // 表单事件
    onFormEvents ({ item, type }) {
      this.$emit(`on-form-${item.columnName}-${type}`, {
        model: this.model,
        item,
        type
      })
    },
    // 按钮事件
    async onToolEvents ({ item, type }) {
      if (item.validate) {
        this.$refs['validateForm'].validate((valid) => {
          if (valid) {
            this.$emit(`on-tool-${item.columnName}-${type}`, {
              model: this.model,
              item,
              type
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      } else {
        this.$emit(`on-tool-${item.columnName}-${type}`, {
          model: this.model,
          item,
          type
        })
      }
    },
    // 校验表单
    async validate () {
      return new Promise((resolve, reject) => {
        this.$refs['validateForm'].validate((valid) => {
          if (valid) {
            resolve(true)
          } else {
            resolve(false)
            return false
          }
        })
      })
    }
  }
}
</script>
<style scoped lang="scss">
.form-create {
  .el-col {
    // border-bottom: 1px solid #d9d9d9;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>
