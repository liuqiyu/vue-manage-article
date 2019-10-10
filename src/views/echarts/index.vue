<template>
  <div>
    <yus-button type="primary">按钮</yus-button>
    <child @hook:mounted="childMounted"></child>
  </div>
</template>

<script>
import child from './child'
export default {
  name: 'echarts',
  components: {
    child
  },
  mounted () {
  },
  methods: {
    childMounted () {
      console.log('childMounted')
    }
  }
}
</script>

<style>
</style>
