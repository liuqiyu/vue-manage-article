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
