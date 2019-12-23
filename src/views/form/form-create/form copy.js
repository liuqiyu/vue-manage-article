export const formCreate = {
  formList: [
    {
      // title: '基本信息',
      // 表单配置
      formFields: [
        {
          label: 'Input输入框：',
          placeholder: '不超过60个字符',
          columnName: 'cmmdtName',
          maxlength: 60,
          rules: [
            { required: true, message: '不可为空', trigger: 'blur' }
          ]
        },
        // 下拉框
        {
          label: '业务属性：',
          type: 'select',
          placeholder: '请选择下拉框',
          columnName: 'pkgType',
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
        // 纯文本
        // {
        //   label: 'Input输入框可点击：',
        //   placeholder: '请输入纯文本',
        //   defaultValue: 12,
        //   readonly: true,
        //   columnName: 'catalogName',
        //   complex: {
        //     val: '修改',
        //     slot: 'append'
        //   },
        //   rules: [
        //     {
        //       required: true,
        //       message: '不可为空',
        //       trigger: 'change blur'
        //     }
        //   ],
        //   func: () => {
        //     alert('弹窗')
        //   }
        // },
        {
          label: '业务编码：',
          readonly: true,
          placeholder: '系统自动生成',
          columnName: 'cmmdtCode'
        },
        {
          label: '版本号：',
          readonly: true,
          placeholder: '系统自动生成',
          columnName: 'edition'
        },
        {
          label: '业务背景：',
          type: 'textarea',
          placeholder: '不超过600个字符',
          columnName: 'cmmdtBg',
          span: 24,
          maxlength: 600
        },
        {
          label: '业务说明：',
          type: 'textarea',
          placeholder: '不超过600个字符',
          columnName: 'cmmdtDesc',
          span: 24,
          maxlength: 900
        },
        {
          label: '业务卖点：',
          type: 'textarea',
          placeholder: '不超过600个字符',
          columnName: 'salePoint',
          span: 24,
          maxlength: 240
        },
        {
          label: '业务类型：',
          type: 'txt',
          defaultValue: '主套餐',
          columnName: 'vb'
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
        // checkbox-group
        {
          label: '赠送功能：',
          type: 'checkbox-group',
          placeholder: '请选择下拉框',
          columnName: 'dasdsa',
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
        // radio-group
        {
          label: '赠送功能：',
          type: 'radio-group',
          placeholder: '请选择下拉框',
          columnName: 'dasdsa',
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
          label: '依赖服务：',
          type: 'txt',
          span: 24,
          defaultValue:
            '测试小米，fdaaaaaaa，产品测试无审批222，产品测试无审批333',
          columnName: 'aadd'
        }
      ]
    }
  ],
  toolList: [
    {
      label: '保存',
      icon: 'el-icon-check',
      class: 'solid-with-icon-btn',
      func: () => {
        alert('保存')
      }
    },
    {
      label: '下一步',
      icon: 'el-icon-caret-right',
      class: 'hollow-with-icon-btn',
      func: () => {
        alert('下一步')
      }
    }
  ]
}
