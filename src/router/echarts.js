import Layout from './../views/layout'

export default {
  path: '/echarts',
  name: 'echarts',
  component: Layout,
  showRoot: true, // will show root menu
  meta: {
    icon: 'icon-ditumap29',
    title: '图表'
  },
  children: [
    {
      path: 'index',
      name: '/echarts/index',
      component: () =>
        import(/* webpackChunkName: "echarts" */ './../views/echarts/index'),
      meta: {
        activeMenu: '/echarts/index',
        title: '图表'
      }
    }
  ]
}
