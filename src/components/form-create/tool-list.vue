<!--
 * @Author: liuqiyu
 * @Date: 2019-12-20 10:39:54
 * @LastEditTime : 2019-12-25 14:58:07
 * @LastEditors  : liuqiyu
 * @Description: In User Settings Edit
 * @FilePath: \pcc_front1\src\views\pcc\commodity\add\create\common\form-create\query-form.vue
 -->
<template>
  <div :class="'is_' + position"
       class="tool-list">
    <template v-for="(item, index) in toolList">
      <el-button :loading="item.loading"
                 :key="index"
                 :class="item.class || 'solid-with-icon-btn'"
                 :icon="item.icon || 'el-icon-check'"
                 :disabled="operationDisabled(item)"
                 @click="handleCommand(item)">{{ item.label }} {{ item.vLoading }}</el-button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ToolList',
  props: {
    toolList: {
      type: Array,
      default: () => []
    },
    position: {
      type: String,
      default: () => 'center'
    }
  },
  methods: {
    handleCommand (item) {
      // if (typeof item.func !== 'function') {
      //     return
      // }
      // item.func && item.func()
      if (item.on && item.on.length > 0) {
        this.$emit('on-events', {
          item: item,
          type: 'click'
        })
      }
    },
    operationDisabled (item) {
      if (typeof item.disabled === 'function') {
        return item.disabled()
      }
      return !!item.disabled
    }
  }
}
</script>

<style lang="scss" scoped>
.is_left {
  text-align: left;
}
.is_center {
  text-align: center;
}
.is_right {
  text-align: right;
}
</style>
