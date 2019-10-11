import Vue from 'vue'

const YusForm = Vue.component('yus-form', {
  functional: true,
  render (h, self) {
    return h('el-form', self.data, self.children)
  }
})

export default YusForm
