/*
 * @Description:
 * @Author: liuqiyu
 * @Date: 2019-11-14 17:14:57
 * @LastEditors  : liuqiyu
 * @LastEditTime : 2019-12-23 10:29:18
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
    },
    {
      path: 'form-create',
      name: 'form-create',
      component: () =>
      import(/* webpackChunkName: "form" */ './../views/form/form-create'),
      meta: {
        title: '111'
      }
    }
  ]
}
