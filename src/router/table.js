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
        title: '表格'
      }
    },
    {
      path: 'page',
      name: 'page-table',
      component: () =>
        import(/* webpackChunkName: "table" */ './../views/table/page'),
      meta: {
        activeMenu: '/table/page',
        noCache: false,
        title: '页面'
      }
    },
    {
      path: 'page/add',
      name: 'page-table-add',
      hidden: true,
      component: () =>
        import(/* webpackChunkName: "table" */ './../views/table/page/add'),
      meta: {
        noMenu: true,
        activeMenu: '/table/page',
        title: '详情表格-新增'
      }
    },
    {
      path: 'page/details/:id',
      name: 'page-table-details',
      component: () =>
        import(/* webpackChunkName: "table" */ './../views/table/page/details'),
      meta: {
        noMenu: true,
        activeMenu: '/table/page',
        title: '详情表格-详情'
      }
    },
    {
      path: 'custom-header',
      name: 'custom-header-table',
      component: () =>
        import(/* webpackChunkName: "table" */ './../views/table/custom-header'),
      meta: {
        activeMenu: '/table/custom-header',
        title: '自定义表头'
      }
    }
  ]
}
