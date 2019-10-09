import Vue from 'vue'

const YusButton = Vue.component('yus-button', {
  functional: true,
  render (h, self) {
    return h('el-button', self.data, self.children)
  }
})

export default YusButton
