import Layout from './../views/layout'

export default {
  path: '/utils',
  name: 'utils',
  showRoot: true,
  meta: {
    icon: 'icon-tool',
    title: '工具'
  },
  component: Layout,
  children: [
    {
      path: 'filter',
      name: '/filter',
      component: () =>
        import(/* webpackChunkName: "utils" */ './../views/utils/filter'),
      meta: {
        activeMenu: '/utils/filter',
        title: '过滤器'
      }
    },
    {
      path: 'utils',
      name: '/utils',
      component: () =>
        import(/* webpackChunkName: "utils" */ './../views/utils/utils'),
      meta: {
        activeMenu: '/utils/utils',
        title: '小工具'
      }
    }
  ]
}
