<!--
 * @Author: liuqiyu
 * @Date: 2019-12-20 10:39:54
 * @LastEditTime : 2019-12-23 16:28:17
 * @LastEditors  : liuqiyu
 * @Description: In User Settings Edit
 * @FilePath: \pcc_front1\src\views\pcc\commodity\add\create\common\form-create\query-form.vue
 -->
<template>
  <div class="form-create">
    <el-form ref="validateForm"
             :model="model"
             size="mini"
             label-width="120px">
      <el-row>
        <el-col v-for="(cell, key) in formFields"
                :key="key"
                :span="cell.span || 12">
          <form-item v-show="cell.show === undefined ? true : cell.show"
                     :item="cell"
                     v-model="model[cell.columnName]">
          </form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import formItem from './form-item'
export default {
  name: 'FormCreate',
  components: {
    formItem
    // toolList
  },
  data () {
    return {
      model: {},
      formFields: [
        // input
        {
          label: 'Input输入框：',
          placeholder: '不超过60个字符',
          columnName: 'input',
          maxlength: 60,
          span: 24,
          rules: [
            { required: true, message: '不可为空', trigger: 'blur' }
          ]
        },
        // InputNumber
        {
          label: 'InputNumber：',
          placeholder: '不超过60个字符',
          type: 'inputNumber',
          columnName: 'inputNumber',
          maxlength: 60,
          span: 24,
          min: 1,
          max: 10,
          rules: [
            { required: true, message: '不可为空', trigger: 'blur' }
          ]
        },
        // select
        {
          label: 'Select选择器：',
          type: 'select',
          placeholder: '请选择下拉框',
          columnName: 'select',
          span: 24,
          clearable: true, // 下拉框是否可以清空当前值
          rules: [
            {
              required: true,
              message: '不可为空',
              trigger: 'change blur'
            }
          ],
          options: [
            {
              value: 123,
              label: 123
            }
          ]
        },
        // Cascader 级联选择器
        {
          label: '级联选择器：',
          type: 'cascader',
          placeholder: '请选择级联选择器',
          columnName: 'cascader',
          span: 24,
          clearable: true, // 下拉框是否可以清空当前值
          rules: [
            {
              required: true,
              message: '不可为空',
              trigger: 'change blur'
            }
          ],
          options: [
            {
              value: 'zhinan',
              label: '指南',
              children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }, {
                  value: 'xiaolv',
                  label: '效率'
                }, {
                  value: 'kekong',
                  label: '可控'
                }]
              }, {
                value: 'daohang',
                label: '导航',
                children: [{
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                }, {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }]
              }]
            }
          ]
        },
        // Switch开关
        {
          label: 'Switch开关：',
          type: 'switch',
          placeholder: 'Switch开关',
          columnName: 'switch',
          span: 24,
          rules: [
            {
              required: true,
              message: '不可为空',
              trigger: 'change blur'
            }
          ]
        },
        // Slider 滑块
        {
          label: 'Slider滑块：',
          type: 'slider',
          placeholder: 'Slider滑块',
          columnName: 'slider',
          span: 24,
          rules: [
            {
              required: true,
              message: '不可为空',
              trigger: 'change blur'
            }
          ]
        },
        // Rate 评分
        {
          label: 'Rate评分：',
          type: 'rate',
          placeholder: 'Rate评分',
          columnName: 'rate',
          span: 24,
          rules: [
            {
              required: true,
              message: '不可为空',
              trigger: 'change blur'
            }
          ]
        },
        // radio-group
        {
          label: 'Radio单选框：',
          type: 'radio-group',
          placeholder: '请选择下拉框',
          columnName: 'radio',
          span: 24,
          props: {
            label: 'label',
            key: 'value'
          },
          options: [
            {
              value: '1',
              label: '彩铃',
              disabled: true
            },
            {
              value: '2',
              label: '来电显示'
            }
          ]
        },
        // checkbox-group
        {
          label: 'Checkbox：',
          type: 'checkbox-group',
          placeholder: '请选择下拉框',
          columnName: 'checkbox',
          span: 24,
          props: {
            label: 'label',
            key: 'value'
          },
          options: [
            {
              value: '1',
              label: '彩铃',
              disabled: true
            },
            {
              value: '2',
              label: '来电显示'
            }
          ]
        },
        {
          label: '业务说明：',
          type: 'textarea',
          placeholder: '不超过600个字符',
          columnName: 'textarea',
          span: 24,
          maxlength: 900
        },
        // 日期选择器
        {
          label: '生效时间：',
          type: 'daterange',
          placeholder: '请选择日期范围',
          columnName: 'date',
          tips: '业务在生效期内才能进行上下架操作',
          rules: [
            {
              required: true,
              message: '不可为空',
              trigger: 'change blur'
            }
          ]
        },
        // 提示框
        {
          type: 'tips',
          tips: '业务在生效期内才能进行上下架操作'
        },
        {
          label: '依赖服务：',
          type: 'txt',
          span: 24,
          defaultValue:
            '测试小米，fdaaaaaaa，产品测试无审批222，产品测试无审批333',
          columnName: 'aadd'
        }
      ]
    }
  },
  created () {
    this.createModel()
  },
  methods: {
    onSubmit () {
      this.$refs['validateForm'].validate(valid => {
        if (valid) {
          console.log(this.model)
          this.$emit('formSubmit', this.model)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    onReset () {
      this.createModel()
      this.$emit('reset')
    },
    getModel () {
      return this.model
    },
    createModel () {
      const ARRAY_ITEM = ['datetimerange', 'daterange', 'checkbox-group', 'cascader']
      this.formFields.forEach(item => {
        if (item.show === undefined || item.show) {
          if (ARRAY_ITEM.indexOf(item.type) >= 0 || item.multiple) {
            this.$set(this.model, item.columnName, item.defaultValue || [])
          } else if (item.type === 'selectTree') {
            this.$set(
              this.model,
              item.columnName,
              item.defaultCheckedKeys || []
            )
          } else {
            this.$set(this.model, item.columnName, item.defaultValue || null)
          }
        }
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
