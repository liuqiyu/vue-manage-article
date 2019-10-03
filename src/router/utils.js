import Layout from './../views/layout'

export default {
  path: '/utils',
  name: 'utils',
  showRoot: true,
  meta: {
    icon: 'icon-tool',
    tag: '/table/index',
    title: '工具'
  },
  component: Layout,
  children: [{
    path: 'filter',
    name: '/filter',
    component: () =>
      import(/* webpackChunkName: "utils" */ './../views/utils/filter'),
    meta: {
      tag: '/utils/filter',
      title: '过滤器'
    }
  }, {
    path: 'utils',
    name: '/utils',
    component: () =>
      import(/* webpackChunkName: "utils" */ './../views/utils/utils'),
    meta: {
      tag: '/utils/utils',
      title: '小工具'
    }
  }]
}
