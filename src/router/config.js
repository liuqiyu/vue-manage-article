import Layout from './../views/layout'

export default {
  path: '/config',
  name: 'config',
  showRoot: false, // will show root menu
  meta: {
    icon: 'icon-xitong',
    tag: '/table/index',
    title: '系统管理'
  },
  component: Layout,
  children: [{
    path: 'auth-menu',
    name: 'auth-menu',
    component: () =>
      import(/* webpackChunkName: "config" */ './../views/config/auth-menu'),
    meta: {
      tag: '/config/auth-menu',
      title: '菜单控制',
      affix: false
    }
  }]
}
