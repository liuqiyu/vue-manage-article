<template>
  <yus-content-page>
    {{a}}
    <yus-button type="primary"
                @click="submit">按钮</yus-button>
  </yus-content-page>
</template>

<script>
export default {
  name: 'echarts',
  data () {
    return {
      a: 1
    }
  },
  mounted () {
  },
  methods: {
    submit () {
      // this.a += 1
      this.$http.post('/api/editor/add', { a: this.a })
    }
  }
}
</script>

<style>
</style>
