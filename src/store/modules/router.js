const router = {
  namespaced: true,
  state: {
    routes: []
  },
  mutations: {
    SET_ROUTER (state, routes) {
      state.routes = routes
    }
  },
  actions: {}
}

export default router
