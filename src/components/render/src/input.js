/*
 * @Description: el-input
 * @Author: liuqiyu
 * @Date: 2019-12-26 16:43:18
 * @LastEditors  : liuqiyu
 * @LastEditTime : 2019-12-26 16:57:11
 */
const NAME = 'asp-input'
export default {
  name: NAME,
  functional: true,
  render (h, self) {
    return h('asp-input', self.data, self.children)
  }
}
