<template>
  <div class="table-item"
       style="width: 100%; height: 100%">
    <el-form ref="edit-table-form"
             :model="formData"
             label-width="0">
      <el-table :height="tableHeight"
                :data="formData.data"
                @sort-change="sortChange"
                @row-dblclick="rowDblClick"
                @selection-change="handleSelectionChange">
        <el-table-column prop="index"
                         fixed="left"
                         label="序号"
                         width="50">
        </el-table-column>

        <el-table-column v-if="options.type === 'selection'"
                         type="selection"
                         fixed="left"
                         width="50">
        </el-table-column>

        <template v-for="(col, i) in columns">
          <el-table-column class="table-column"
                           :sortable="col.sort ? 'custom' : false"
                           :prop="col.key"
                           :key="col.key + i"
                           :label="col.label"
                           :render-header="renderHeader"
                           :width="col.width">
            <template slot-scope="scope">
              <!--文本-->
              <!-- {{scope.row[col.key]}}{{scope.$index}} -->
              <el-form-item :rules="col.rules || []"
                            :prop="'data.' + scope.$index + '.' + col.key">
                <el-input v-model="scope.row[col.key]"
                          placeholder="请输入内容"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
        </template>

        <el-table-column v-if="operation && operation.options.length > 0"
                         header-align="left"
                         :fixed="operation.fixed"
                         :label="operation.label"
                         :width="operation.width">
          <template slot-scope="scope">
            <template v-for="(btn, i) in operation.options">
              <el-button v-if="!btn.type || btn.type === 'text'"
                         class="table-btn"
                         :key="btn.label + i"
                         :icon="btn.icon"
                         :size="btn.size || 'mini'"
                         v-auth="btn.auth || null"
                         v-show="operationShow(btn, scope.row)"
                         type="text"
                         :disabled="operationDisabled(btn, scope.row)"
                         @click.stop="handleCommand(btn, scope.row)">
                {{ btn.label }}
              </el-button>
              <el-tooltip v-else-if="btn.type === 'icon'"
                          class="item"
                          effect="dark"
                          v-auth="btn.auth || null"
                          :content="btn.label"
                          placement="top-start"
                          :key="btn.label + i">
                <span class="operation-icon"
                      :class="btn.icon"
                      @click.stop="handleCommand(btn, scope.row)"></span>
              </el-tooltip>
            </template>
          </template>
        </el-table-column>
        <template slot="empty">
          <div class="empty">
            <h2>页面暂无内容</h2>
            <p>抱歉，页面暂无内容，请看看其他页面</p>
          </div>
        </template>
      </el-table>
    </el-form>
    <el-button @click="submit">点击</el-button>
  </div>
</template>

<script>
export default {
  name: 'table-item',
  props: {
    // 表格选项
    options: {
      type: Object,
      default: () => { }
    },
    // 表头
    columns: {
      type: Array,
      default: () => []
    },
    // 按钮
    operation: {
      type: Object,
      default: () => { }
    },
    // 数据
    tableData: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    this.formData.data = this.tableData
  },
  data () {
    return {
      form: {},
      multipleSelection: [],
      tableHeight: '100%',
      formData: {
        data: null
      }
    }
  },
  methods: {
    submit () {
      this.$refs['edit-table-form'].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    renderHeader (h, { column, $index }) {
      let label = column.label || ''
      // let i = this.hIndex
      let c = this.columns[$index - 2]
      console.log(this.columns, $index)
      console.log(c)
      // console.log(i, c)
      if (c && c.rules) {
        let isRender = false
        if (Array.isArray(c.rules)) {
          for (let obj of c.rules) {
            if (obj.required) {
              isRender = true
              break
            }
          }
        } else if (c.rules.required) {
          isRender = true
        }
        if (isRender) {
          return h('span', {}, [
            h('i', { style: { color: '#ff5555', paddingRight: '3px' } }, '*'),
            label
          ])
        } else {
          return h('span', label)
        }
      } else {
        return h('span', label)
      }
    },
    handleCommand (btn, row) {
      if (!btn.func) {
        return
      }
      btn.func(row)
    },
    // 选中
    handleSelectionChange (val) {
      // this.multipleSelection = val
      if (!this.options.selectionChange) {
        return
      }
      this.options.selectionChange(val)
    },
    // 双击行
    rowDblClick (row, column, event) {
      if (!this.options.rowDblClick) {
        return
      }
      this.options.rowDblClick(row)
    },
    operationDisabled (btn, row) {
      if (typeof btn.disabled === 'function') {
        return btn.disabled(row)
      }
      return !!btn.disabled
    },
    operationShow (btn, row) {
      if (!btn.show) {
        return true
      }
      if (typeof btn.show === 'function') {
        return btn.show(row)
      }
      return btn.show
    },
    // 自定义排序 custom
    sortChange ({ column, prop, order }) {
      this.$emit('sort-change', { prop, order })
    }
  }
}
</script>

<style scoped lang="scss">
@import "./../../style/variable";
.table-btn {
  margin-right: 8px;
  cursor: pointer;
}

.yus-table {
  .text-btn {
    color: #409eff;
    cursor: pointer;
  }
  .text-point {
    .point {
      display: inline-block;
      margin-right: 10px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #fff;
    }
  }
}

.operation-icon {
  margin: 0 10px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    color: #000;
  }
}
</style>
