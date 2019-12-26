/*
 * @Description:
 * @Author: liuqiyu
 * @Date: 2019-11-14 17:14:57
 * @LastEditors  : liuqiyu
 * @LastEditTime : 2019-12-26 14:28:54
 */
import Layout from './../views/layout'

export default {
  path: '/form',
  component: Layout,
  showRoot: false, // will show root menu
  meta: {
    title: 'Form',
    icon: 'icon-shifouyunxuweiwanchengpandianrenwukaidan'
  },
  children: [
    {
      path: 'index',
      name: 'form',
      component: () =>
      import(/* webpackChunkName: "form" */ './../views/form/index'),
      meta: {
        title: 'Form'
      }
    }
  ]
}
