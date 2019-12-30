<template>
  <div class="edit-table"
       style="height: 100%">
    <table-item ref="tableList"
                v-loading="loading"
                :columns="tables.columns"
                :operation="tables.operation"
                :options="tables.options"
                :tableData="tableData"
                @sort-change="sortChange">
    </table-item>
  </div>
</template>

<script>
import tableItem from './table-item'
export default {
  name: 'edit-table',
  components: {
    tableItem
  },
  props: {
    tables: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      loading: false,
      tableData: [],
      currentPage: 1,
      pageSize: 20,
      total: 0,
      queryModel: {}
    }
  },
  created () {
    this.tableData = [
      {
        name: 123,
        nickname: 123
      }
    ]
  },
  methods: {
    // 排序
    sortChange (val) {
      this.fetchTable(val)
    }
  }
}
</script>

<style scoped lang="scss">
.query-table {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.query-form {
  flex: none;
}
.table-wrapper {
  flex: 1;
  height: 100%;
  background: #ffffff;
  border: 1px solid #dee8f8;
  margin-top: 12px;
  padding: 12px 20px 8px 20px;
  display: flex;
  flex-direction: column;
  .yus-table-list {
    flex: 1;
    height: 100%;
    overflow: hidden;
  }
  .yus-tool-bar {
    flex: none;
    padding-bottom: 5px;
  }
  .yus-pagination {
    flex: none;
    text-align: right;
    padding: 8px 0 0 0;
    /deep/ .btn-next {
      margin-right: 0;
    }
    /deep/ .el-pagination__total,
    /deep/ .el-pagination__sizes {
      float: left;
    }
  }
}
</style>
