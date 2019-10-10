<template>
  <div>
    <yus-button type="primary">按钮</yus-button>
  </div>
</template>

<script>
export default {
  name: 'echarts',
  async mounted () {
    console.log(1)
    const res = await this.$http.get('/api/editor/add')
    console.log(res)
  }
}
</script>

<style>
</style>
