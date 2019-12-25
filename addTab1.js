import moment from 'moment'

export const json1 = {
    formList: [
        {
            title: '基本信息',
            // 表单配置
            formFields: [
                // 纯文本
                {
                    label: '业务目录：',
                    placeholder: '请输入纯文本',
                    readonly: true,
                    columnName: 'catalogName',
                    complex: {
                        val: '修改',
                        slot: 'append'
                    },
                    rules: [
                        { required: true, message: '不可为空', trigger: 'change blur' },
                    ],
                    on: ['click']
                },
                {
                    label: '业务名称：',
                    placeholder: '不超过60个字符',
                    columnName: 'cmmdtName',
                    maxlength: 60,
                    rules: [
                        { required: true, message: '不可为空', trigger: 'blur' },
                        { max: 60, message: '业务名称不超过60个字符', trigger: 'blur' },
                    ]
                },
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
                    columnName: 'modelTypeName'
                },
                // 下拉框 
                {
                    label: '业务属性：',
                    type: 'select',
                    placeholder: '请选择下拉框',
                    columnName: 'pkgType',
                    clearable: true, // 下拉框是否可以清空当前值
                    rules: [
                        { required: true, message: '不可为空', trigger: 'change blur' },
                    ],
                    options: []
                },
                // 日期选择器
                {
                    label: '生效时间：',
                    type: 'dateList',
                    placeholder: '请选择日期范围',
                    columnName: 'date',
                    tips: '业务在生效期内才能进行上下架操作',
                    pickerOptions:[
                        {
                            disabledDate(time) {
                                let t = Date.now() - 3600 * 1000 * 24
                                return time.getTime() < t
                            },
                            shortcuts: [
                                {
                                    text: '今天',
                                    onClick(picker) {
                                        picker.$emit('pick', new Date())
                                    }
                                }
                            ]
                        },
                        {
                            disabledDate(time) {
                                let t = Date.now() - 3600 * 1000 * 24
                                return time.getTime() < t
                            }
                        }
                    ],
                    rules: [
                        { required: true, validator: (rule, value, callback) => {
                            const start = moment(value[0], 'YYYY-MM-DD HH:mm:ss').valueOf()
                            const end = moment(value[1], 'YYYY-MM-DD HH:mm:ss').valueOf()
                            if (!value[0]) {
                                callback(new Error('生效日期不可为空'))
                            } else if (start > end) {
                                callback(new Error('失效日期必须大于生效日期!'))
                            } else {
                                callback()
                            }
                        }, trigger: 'blur'}
                    ]
                },
                // 提示框
                {
                    type: 'tips',
                    tips: '业务在生效期内才能进行上下架操作'
                },
                // checkbox
                {
                    label: '赠送功能：',
                    type: 'checkbox',
                    span: 24,
                    placeholder: '请选择下拉框',
                    columnName: 'giftFunc',
                    options: []
                },
                {
                    label: '依赖服务：',
                    type: 'txt',
                    span: 24,
                    columnName: 'services'
                },
            ]
        }
    ],
    toolList: [
        {
            label: '保存',
            icon: 'el-icon-check',
            class: 'solid-with-icon-btn',
            columnName: 'submit',
            on: ['click']
        },
        {
            label: '下一步',
            icon: 'el-icon-caret-right',
            class: 'hollow-with-icon-btn',
            columnName: 'next',
            on: ['click']
        }
    ]
}