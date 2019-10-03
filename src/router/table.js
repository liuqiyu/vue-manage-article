import Layout from './../views/layout'

export default {
  path: '/table',
  name: 'Table',
  showRoot: true,
  meta: {
    icon: 'icon-biaoge',
    tag: '/table/index',
    title: '表格'
  },
  component: Layout,
  children: [
    {
      path: 'default',
      name: 'default-table',
      component: () =>
        import(/* webpackChunkName: "table" */ './../views/table/default'),
      meta: {
        title: '表格弹窗',
        affix: false
      }
    },
    {
      path: 'details',
      name: 'details-table',
      component: () =>
        import(/* webpackChunkName: "table" */ './../views/table/details'),
      meta: {
        activeMenu: '/table/details',
        title: '表格详情',
        affix: false
      }
    },
    {
      path: 'details/add',
      name: 'details-table-add',
      hidden: true,
      component: () =>
        import(/* webpackChunkName: "table" */ './../views/table/details/add'),
      meta: {
        notMenu: true,
        activeMenu: '/table/details',
        title: '详情表格-新增',
        affix: false
      }
    },
    {
      path: 'details/details/:id',
      name: 'details-table-details',
      component: () =>
        import(/* webpackChunkName: "table" */ './../views/table/details/details'),
      meta: {
        notMenu: true,
        activeMenu: '/table/details',
        title: '详情表格-详情',
        affix: false
      }
    },
    {
      path: 'custom-header',
      name: 'custom-header-table',
      component: () =>
        import(/* webpackChunkName: "table" */ './../views/table/custom-header'),
      meta: {
        tag: '/table/custom-header',
        title: '自定义表头',
        affix: false
      }
    }
  ]
}
