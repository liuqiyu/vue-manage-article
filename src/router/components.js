import Layout from './../views/layout'

export default {
  path: '/components',
  name: 'Components',
  showRoot: true, // will show root menu
  meta: {
    icon: 'icon-zujian',
    title: '公用组件'
  },
  component: Layout,
  children: [
    {
      path: 'tool-bar',
      name: 'tool-bar',
      component: () =>
        import(/* webpackChunkName: "components" */ './../views/components/tool-bar'),
      meta: {
        activeMenu: '/components/tool-bar',
        title: '按钮工具栏'
      }
    },
    {
      path: 'query-form',
      name: 'query-form',
      component: () =>
        import(/* webpackChunkName: "components" */ './../views/components/query-form'),
      meta: {
        activeMenu: '/components/query-form',
        title: '搜索框'
      }
    },
    {
      path: 'dialog',
      name: 'dialog',
      component: () =>
        import(/* webpackChunkName: "components" */ './../views/components/dialog'),
      meta: {
        activeMenu: '/components/dialog',
        title: '可拖动弹窗'
      }
    }
  ]
}
