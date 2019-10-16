<template>
  <yus-content-page>
    <yus-details-page>
      <el-tree :data="data"
               :props="defaultProps"
               show-checkbox
               @check-change="handleCheckChange"
               @node-click="handleNodeClick"></el-tree>
    </yus-details-page>
  </yus-content-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      data: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  computed: {
    ...mapGetters([
      'menuRoutes'
    ])
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    },
    handleCheckChange (data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
    }
  },
  mounted () {
    console.log(this.menuRoutes)
    this.data = this.menuRoutes
  }
}
</script>
