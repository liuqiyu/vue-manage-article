/*
 * @Description:
 * @Author: liuqiyu
 * @Date: 2019-11-14 17:14:57
 * @LastEditors  : liuqiyu
 * @LastEditTime : 2019-12-26 17:29:57
 */
import Vue from 'vue'
import {
  version
} from 'element-ui'
import countTo from 'vue-count-to'
import directives from '../directives'
// import http from './../utils/http'
// 全局组件
import YusQueryTable from './yus-query-table'
import YusToolBar from './yus-tool-bar'
import YusQueyForm from './yus-query-form'
import YusTableList from './yus-query-table/yus-table-list'
import YusDialog from './yus-dialog'
import YusDetailsPage from './yus-details-page'
import YusContentPage from './yus-content-page'
import YusContentRow from './yus-content-row'
import YusContentCell from './yus-content-cell'
import YusActionBar from './yus-action-bar'
import YusThemePicker from './yus-theme-picker'
import YusButton from './yus-button'
import formCreate from './form-create'
import formItem from './form-create/form-item'
import editTable from './edit-table'

const components = [YusQueryTable, YusToolBar, YusQueyForm,
  YusTableList, YusDialog, YusDetailsPage,
  YusContentPage, YusContentRow, YusContentCell,
  YusActionBar, YusThemePicker, YusButton, formCreate, formItem, editTable
]

const setPrototype = () => {
  Vue.prototype.$bus = new Vue()
}

const setDirective = Vue => {
  Object.keys(directives).forEach(v => Vue.directive(v, directives[v]))
}

const install = (Vue) => {
  window.$version = {
    vue: Vue.version,
    ele: version
  }
  components.filter(v => typeof v !== 'function').forEach(v => Vue.component(v.name, v))
  Vue.component('countTo', countTo)
  setPrototype(Vue)
  setDirective(Vue)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
