/*
 * @Descripttion:
 * @version:
 * @Author: voanit
 * @Date: 2019-10-11 11:13:41
 * @LastEditors: voanit
 * @LastEditTime: 2019-11-04 15:39:20
 */
import Layout from './../views/layout'

export default {
  path: '/form',
  component: Layout,
  showRoot: false, // will show root menu
  meta: {
    title: 'Form'
  },
  children: [{
    path: 'index',
    name: 'form',
    component: () =>
      import(/* webpackChunkName: "form" */ './../views/form/index'),
    meta: {
      icon: 'icon-shifouyunxuweiwanchengpandianrenwukaidan',
      title: 'Form'
    }
  }]
}
