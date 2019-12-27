# Asp-Form-Create 文档

`Asp-Form-Create` 是一个可以通过`json`生成具有动态渲染、数据收集、验证和提交功能的表单生成器。内部集成了大量的基于`element-ui`的表单组件。

## 目录

* [技术栈](#技术栈)
* [安装使用](#安装使用)
    * [全局挂载](#全局挂载)
    * [局部组件调用](#局部组件调用)
* [功能](#功能)
* [整体框架](#整体框架)
* [内置组件](#内置组件)
    * [Input 输入框](#Input 输入框)
    * [Textarea 文本域](#Textarea 文本域)
    * [InputNumber 计数器](#InputNumber 计数器)
    * [Select 下拉框](#Select 下拉框)
    * [Daterange 日期选择器](#Daterange 日期选择器)
    * [Datetimerange 时间选择器](#Datetimerange 时间选择器)
    * [Date 日期选择器](#Date 日期选择器)
    * [Checkbox 多选框](#Checkbox 多选框)
    * [Radio 单选框](#Radio 单选框)
    * [Cascader 级联选择器](#Cascader 级联选择器)
    * [Switch 开关](#Switch 开关)
    * [Slider 滑块](#Slider 滑块)
    * [Rate 评分](#Rate 评分)
    * [DateList 自定义日期选择器](#DateList 自定义日期选择器)
    * [Txt 提示组件](#Txt 提示组件)

<a id="技术栈"></a>
## 技术栈

* element-ui 2.x
* vue 2.x

<a id="安装使用"></a>
## 安装使用

### 全局挂载

在全局挂载`asp-form-create`组件。然后直接使用

### 局部组件调用
```vue
<template>
    <div class="pcc">
          <AspFormCreate ref="formCreate" 
                           :form-create="formCreate"
                           @on-form-catalogName-click="choiceCatalog"
                           @on-tool-submit-click="submit"
                           @on-tool-next-click="next"
            ></AspFormCreate>
    </div>
</template>
<script>
import AspFormCreate from './asp-form-create'

export default {
    components: {
        AspFormCreate
    },
    data() {
        return {
            formCreate: {},
        }
    },
    async created () {
        // 加载本地文件
        // this.formCreate = require('./json/addTab1.json')
        // 加载远程文件
        this.formCreate = await this.$get('https://raw.githubusercontent.com/liuqiyu/vue-admin-pro/master/addTab1.json')
    }
}
</script>
```

### JSON

```json
{
  "formList": [{
    "title": "基本信息",
    "formFields": [{
        "label": "业务名称：",
        "columnName": "cmmdtName",
        "class": "input-class",
        "style": {
          "color": "red"
        },
        "props": {
          "placeholder": "不超过60个字符",
          "maxlength": 60,
          "show-word-limit": true
        },
        "button": true,
        "slot": "append",
        "slot-name": "修改",
        "rules": [{
            "required": true,
            "message": "不可为空",
            "trigger": "blur"
          },
          {
            "max": 60,
            "message": "业务名称不超过60个字符",
            "trigger": "blur"
          }
        ]
      },
      {
        "label": "版本号：",
        "columnName": "edition",
        "type": "inputNumber",
        "props": {
          "readonly": true,
          "placeholder": "系统自动生成",
          "max": 10,
          "precision": 2,
          "step": 0.1,
          "controls-position": "right"
        }
      },
      {
        "label": "业务背景：",
        "type": "textarea",
        "columnName": "cmmdtBg",
        "props": {
          "placeholder": "不超过600个字符",
          "maxlength": 600
        },
        "span": 12
      },
      {
        "label": "下拉框",
        "type": "select",
        "placeholder": "不超过600个字符",
        "columnName": "a",
        "span": 12,
        "props": {
          "placeholder": "系统自动生成",
          "max": 10,
          "precision": 2,
          "step": 0.1,
          "controls-position": "right"
        },
        "options": [{
          "label": 1,
          "value": 1
        }]
      },
      {
        "label": "checkboxLabel",
        "type": "checkbox",
        "placeholder": "不超过600个字符",
        "columnName": "checkboxName",
        "span": 12,
        "props": {
          "placeholder": "系统自动生成"
        },
        "options": [{
          "label": "你好",
          "value": 1
        }, {
          "label": "再见",
          "value": 2
        }]
      },
      {
        "label": "radio",
        "type": "radio",
        "placeholder": "不超过600个字符",
        "columnName": "radio",
        "span": 12,
        "props": {
          "placeholder": "系统自动生成"
        },
        "options": [{
          "label": "你好",
          "value": 1
        }, {
          "label": "再见",
          "value": 2
        }]
      }
    ]
  }],
  "toolList": [{
      "label": "保存",
      "icon": "el-icon-check",
      "class": "solid-with-icon-btn",
      "columnName": "submit",
      "on": ["click"]
    },
    {
      "label": "下一步",
      "icon": "el-icon-caret-right",
      "class": "hollow-with-icon-btn",
      "columnName": "next",
      "on": ["click"]
    }
  ]
}
```

### Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|--- |--- |--- |---
form-create | 数据  | object  |  formList, toolList | ''

### Events

`asp-form-create`需要手动挂载到父组件上面，例如：表单`input`输入框有一个点击事件`"on":["click"]`。需要在父组件上挂载此方法：`on-form-catalogName-click`, 具体格式（`on-form-XX-click`）。`XX`代表该表单的`columnName`,`click`代表事件名。同理按钮事件绑定，是需要将`on-form-XX-click`改成`on-tool-XX-click`即可。

<a id="功能"></a>
## 功能

* 通过`JSON`生成表单
* 强大的API，可快速操作表单
* 双向数据绑定
* 事件扩展
* 数据验证
* 栅格布局
* 内置组件
    * Input 输入框
    * Textarea 文本域
    * InputNumber 计数器
    * Select 下拉框
    * Daterange 日期选择器
    * Datetimerange 时间选择器
    * Date 日期选择器
    * Checkbox 多选框
    * Radio 单选框
    * Cascader 级联选择器
    * Switch 开关
    * Slider 滑块
    * Rate 评分
    * DateList 自定义日期选择器
    * Txt 提示组件

<a id="整体框架"></a>
## 整体框架

![image](3BCEC0DCA41949E895AB9075B44D3047)

<a id="内置组件"></a>
## 内置组件

### Input 输入框

通过鼠标或键盘输入字符

JSON

```json
{
    "label": "业务名称：",
    "columnName": "cmmdtName",
    "class": "input-class",
    "props": {
      "placeholder": "不超过60个字符",
      "maxlength": 60,
      "show-word-limit": true
    },
    "button": true,
    "slot": "append",
    "slot-name": "修改",
    "rules": [{
        "required": true,
        "message": "不可为空",
        "trigger": "blur"
      }
    ],
    "on": ["click"]
}
```

#### Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|--- |--- |--- |---
type | 类型  | string  | 空,input,number | ''
label | 名称  | string  |  必填 | 必填
columnName | 字段名  | string  | 必填 | 必填
span | col span  | number  | — | 12
class | 类  | string  | — | ——
icon | 图标  | string  | — | —
button | 是否显示按钮  | boolean  | — | false
slot | 是否显示按钮  | string  | 如果button = true:</br> prepend(输入框前置)</br>append(输入框后前置)</br> 如果button = false:</br>prefix(输入框头部图标)</br>  suffix(输入框尾部图标)| prepend
slot-name | 名称  | string  | —| —
rules | 校验  | 参考form 校验  | —| —
on | 事件  | array | ["click"] | —

#### Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|--- |--- |--- |---
disabled | 禁用  | boolean  | — | false
readonly | 是否只读  | boolean  | — | false
placeholder | 	输入框占位文本	  | string  | — | —
maxlength | 最大输入长度  | number  | — | —
minlength | 最大输入长度  | number  | — | —
show-word-limit | 是否显示输入字数</br>统计  | boolean  | — | false
clearable | 是否可清空  | boolean  | — | false

其他请参考`element-ui`文档

#### Events

事件名称 | 说明 | 回调参数
---|---|---
click | 点击按钮事件 | ({model, item}) // model:表单数据</br>item:选中当前表单


### Textarea 文本域

用于输入多行文本信息

```json
{
    "label": "业务背景：",
    "type": "textarea",
    "columnName": "cmmdtBg",
    "props": {
      "placeholder": "不超过600个字符",
      "maxlength": 600
    },
    "span": 12
}
```

#### Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|--- |--- |--- |---
type | 类型  | string  | textarea | —

#### Props

其他属性参考 `input` 属性


### InputNumber 计数器

仅允许输入标准的数字值，可定义范围

JSON

```json
{
    "label": "版本号：",
    "columnName": "edition",
    "type": "inputNumber",
    "props": {
      "readonly": true,
      "placeholder": "系统自动生成",
      "max": 10,
      "precision": 2,
      "step": 0.1,
      "controls-position": "right"
    }
}
```

#### Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|--- |--- |--- |---
type | 类型  | string  | inputNumber | ''
label | 名称  | string  |  必填 | 必填
columnName | 字段名  | string  | 必填 | 必填
span | col span  | number  | — | 12
class | 类  | string  | — | ——
rules | 校验  | 参考form 校验  | —| —

#### Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|--- |--- |--- |---
disabled | 禁用  | boolean  | — | false
readonly | 是否只读  | boolean  | — | false
placeholder | 	输入框占位文本	  | string  | — | —
max | 设置计数器允许的最大值  | number  | — | Infinity
min |设置计数器允许的最小值| number  | — | -Infinity
clearable | 是否可清空  | boolean  | — | false
step | 计数器步长  | number  | — | 1
step-strictly | 是否只能输入step的倍数  | number  | — | false
precision | 数值精度  | number  | — | —
controls-position | 	控制按钮位置  | string  | right | —

其他请参考`element-ui`文档

### Select 下拉框

当选项过多时，使用下拉菜单展示并选择内容

```json
{
    "label": "下拉框",
    "type": "select",
    "placeholder": "不超过600个字符",
    "columnName": "select1",
    "span": 12,
    "props": {
      "placeholder": "系统自动生成",
      "max": 10,
      "precision": 2,
      "step": 0.1,
      "controls-position": "right"
    },
    "options": [{
      "label": 1,
      "value": 1
    }]
}
```

#### Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|--- |--- |--- |---
type | 类型  | string  | select | —
label | 名称  | string  |  必填 | 必填
columnName | 字段名  | string  | 必填 | 必填
span | col span  | number  | — | 12
class | 类  | string  | — | ——
rules | 校验  | 参考form 校验  | —| —
options | 选项  | array  | —| —

#### Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|--- |--- |--- |---
disabled | 禁用  | boolean  | — | false
readonly | 是否只读  | boolean  | — | false
placeholder | 	输入框占位文本	  | string  | — | —
multiple | 是否多选  | boolean  | — | false
collapse-tags | 多选时是否将选中值</br>按文字的形式展示  | boolean  | — | false
multiple-limit | 多选时用户最多可以选择</br>的项目数为0则不限制  | number  | — | 0
clearable | 是否可清空  | boolean  | — | false
filterable | 是否可搜索  | boolean  | — | false

### Daterange 日期选择器
### Datetimerange 时间选择器
### Date 日期选择器
### Checkbox 多选框

一组备选项中进行多选

```json
{
    "label": "checkboxLabel",
    "type": "checkbox",
    "placeholder": "不超过600个字符",
    "columnName": "checkboxName",
    "span": 12,
    "props": {
      "placeholder": "系统自动生成"
    },
    "options": [{
      "label": "你好",
      "value": 1
    }, {
      "label": "再见",
      "value": 2
    }]
}
```

#### Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|--- |--- |--- |---
type | 类型  | string  | checkbox | —
label | 名称  | string  |  必填 | 必填
columnName | 字段名  | string  | 必填 | 必填
span | col span  | number  | — | 12
class | 类  | string  | — | ——
rules | 校验  | 参考form 校验  | —| —
options | 选项  | array  | —| —

#### Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|--- |--- |--- |---
disabled | 禁用  | boolean  | — | false
readonly | 是否只读  | boolean  | — | false

其他参考`element-ui`

### Radio 单选框

在一组备选项中进行单选

```json
{
    "label": "radio",
    "type": "radio",
    "placeholder": "不超过600个字符",
    "columnName": "radio",
    "span": 12,
    "props": {
      "placeholder": "系统自动生成"
    },
    "options": [{
      "label": "你好",
      "value": 1
    }, {
      "label": "再见",
      "value": 2
    }]
}
```

#### Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|--- |--- |--- |---
type | 类型  | string  | radio | —
label | 名称  | string  |  必填 | 必填
columnName | 字段名  | string  | 必填 | 必填
span | col span  | number  | — | 12
class | 类  | string  | — | ——
rules | 校验  | 参考form 校验  | —| —
options | 选项  | array  | —| —

#### Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|--- |--- |--- |---
disabled | 禁用  | boolean  | — | false
readonly | 是否只读  | boolean  | — | false

其他参考`element-ui`


### DateList 自定义日期选择器

### Txt 提示组件