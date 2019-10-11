import Vue from 'vue'

const YusFormItem = Vue.component('yus-form-item', {
  functional: true,
  render (h, self) {
    return h('el-form-item', self.data, self.children)
  }
})

export default YusFormItem
