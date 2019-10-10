<template>
  <div class="yus-content-row">
    <header>
      <h3>{{title || ''}}</h3>
    </header>
    <section>
      <slot></slot>
    </section>
  </div>
</template>

<script>

export default {
  name: 'yus-content-row',
  props: {
    options: {
      type: Object,
      default: () => { }
    },
    tools: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    title () {
      return this.$route.meta.title
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/style/variable";
.yus-content-row {
  background: #ffffff;
  border: 1px solid $borderColor;
  margin-bottom: 10px;
  header {
    padding: 0 20px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid $borderColor;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 16px;
      color: #53607e;
      letter-spacing: 0;
    }
    .left-bar {
      display: flex;
      color: #53607e;
      letter-spacing: 0;
      h3 {
        font-size: 14px;
      }
      > span {
        font-size: 14px;
        cursor: pointer;
        margin-right: 8px;
      }
      .tags {
        margin-left: 10px;
      }
    }
  }
  section {
    padding: 20px;
  }
}
</style>
