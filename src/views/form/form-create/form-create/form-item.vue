<!--
 * @Author: liuqiyu
 * @Date: 2019-12-20 10:39:54
 * @LastEditTime : 2019-12-23 15:08:48
 * @LastEditors  : liuqiyu
 * @Description: In User Settings Edit
 * @FilePath: \pcc_front1\src\views\pcc\commodity\add\create\common\form-create\query-form.vue
 -->
<template>
  <el-form-item class="form-create-item"
                :label="item.label"
                :prop="item.columnName"
                :rules="item.rules || []">
    <!-- 普通文本 -->
    <div v-if="item.type === 'txt'"
         class="txt">
      {{ value }}
    </div>

    <!--input 文本-->
    <el-input v-if="item.type === undefined || item.type === 'input' || item.type === 'number'"
              :style="{width: item.width || null}"
              :type="item.type === undefined ? 'text' : item.type"
              :value="value"
              :disabled="isDisabled(item)"
              :readonly="isReadonly(item)"
              :placeholder="item.placeholder"
              :maxlength="item.maxlength"
              clearable
              show-word-limit
              @input="bindChange">

      <i v-if="!!item.icon"
         :slot="doIcon(item)"
         :class="typeof item.icon === 'object' ? item.icon.class : item.icon"
         class="el-input__icon"></i>
      <el-button v-if="!!item.complex"
                 :slot="doComplex(item)"
                 @click.stop="handleCommand">
        {{ typeof item.complex === 'object' ? item.complex.val : item.complex }}</el-button>
    </el-input>

    <!-- input-number -->
    <el-input-number v-if="item.type === 'inputNumber'"
                     :style="{width: item.width || null}"
                     :value="value"
                     :min="item.min"
                     :max="item.max"
                     :disabled="isDisabled(item)"
                     :readonly="isReadonly(item)"
                     :placeholder="item.placeholder"
                     :step="item.step"
                     :step-strictly="item.stepStrictly"
                     :precision="item.precision"
                     @input="bindChange">
    </el-input-number>

    <!--textarea-->
    <el-input v-else-if="item.type === 'textarea'"
              :style="{width: item.width || null}"
              :value="value"
              :disabled="isDisabled(item)"
              :readonly="isReadonly(item)"
              :placeholder="item.placeholder"
              :maxlength="item.maxlength"
              :rows="item.rows || 3"
              type="textarea"
              show-word-limit
              @input="bindChange">
    </el-input>

    <!--select 下拉框-->
    <el-select v-else-if="item.type === 'select'"
               :style="{width: item.width || null}"
               :disabled="isDisabled(item)"
               :readonly="isReadonly(item)"
               :value="value"
               :filterable="item.filterable"
               :multiple="item.multiple"
               :collapse-tags="item.collapse"
               :placeholder="item.placeholder"
               :clearable="item.clearable === undefined ? true : item.clearable"
               @change="bindChange">
      <el-option label="--请选择--"
                 value=""></el-option>
      <el-option v-for="(cell, index) in doSelectOptions()"
                 :key="cell.value + index"
                 :label="cell.label"
                 :value="cell.value">
      </el-option>
    </el-select>

    <!-- Cascader 级联选择器 -->
    <el-cascader v-else-if="item.type === 'cascader'"
                 :style="{width: item.width || null}"
                 :value="value"
                 :options="item.options"
                 :props="item.props"
                 :placeholder="item.placeholder"
                 :clearable="item.clearable === undefined ? true : item.clearable"
                 :show-all-levels="item.showAllLevels"
                 :collapse-tags="item.collapseTags"
                 :filterable="item.filterable"
                 @change="bindChange">
    </el-cascader>

    <!-- Switch 开关-->
    <el-switch v-else-if="item.type === 'switch'"
               :width="item.width"
               :value="value"
               :active-color="item.activeColor"
               :inactive-color="item.inactiveColor"
               :active-text="item.activeText"
               :inactive-text="item.inactiveText"
               :active-icon-class="item.activeIconClass"
               :inactive-icon-class="item.inactiveIconClass"
               :active-value="item.activeValue"
               :inactive-value="item.inactiveValue"
               :name="item.name"
               :validate-event="item.validateEvent"
               :disabled="isDisabled(item)"
               :readonly="isReadonly(item)"
               @input="bindChange">
    </el-switch>

    <!-- Slider 滑块 -->
    <el-slider v-else-if="item.type === 'slider'"
               :value="value"
               :show-tooltip="item.showTooltip"
               :disabled="isDisabled(item)"
               :readonly="isReadonly(item)"
               :range="item.range"
               :min="item.min"
               :max="item.max"
               :vertical="item.vertical"
               :marks="item.marks"
               :step="item.step"
               :show-stops="item.showStops"
               @input="bindChange">
    </el-slider>

    <!-- Rate 评分 -->
    <el-rate v-else-if="item.type === 'rate'"
             :value="value"
             :colors="item.colors"
             :icon-classes="item.iconClasses"
             :void-icon-class="item.voidIconClass"
             :show-text="item.showText"
             :show-score="item.showScore"
             score-template="{value}"
             :disabled="isDisabled(item)"
             :readonly="isReadonly(item)"
             @input="bindChange"></el-rate>

    <!--daterange 日期选择器-->
    <el-date-picker v-else-if="item.type === 'daterange'"
                    :value="value"
                    :format="item.format || 'yyyy-MM-dd'"
                    :value-format="item.valueFormat || 'yyyy-MM-dd'"
                    :picker-options="pickerOptions"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    @input="datePickerChange">
    </el-date-picker>

    <!--datetimerange 时间选择器-->
    <el-date-picker v-else-if="item.type === 'datetimerange'"
                    :value="value"
                    :format="item.format || 'yyyy-MM-dd HH:mm:ss'"
                    :value-format="item.valueFormat || 'yyyy-MM-dd HH:mm:ss'"
                    :picker-options="pickerOptions"
                    :clearable="item.clearable === undefined ? true : item.clearable"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    @input="datePickerChange">
    </el-date-picker>

    <!--date 日期选择器  date/week/month/year -->
    <el-date-picker v-else-if="['date', 'week', 'month', 'year'].includes(item.type)"
                    :value="value"
                    :type="item.type"
                    :placeholder="item.placeholder"
                    :value-format="item.valueFormat || 'yyyy-MM-dd'"
                    @input="datePickerChange">
    </el-date-picker>

    <!--tree-select 下拉树-->
    <asp-tree-select v-else-if="item.type === 'selectTree'"
                     :data="item.data"
                     :value="value"
                     :lazy="item.lazy"
                     :load="item.load"
                     :props="item.props"
                     :show-checkbox="item.showCheckbox"
                     :multiple-limit="item.multipleLimit"
                     :check-leaf="item.checkLeaf"
                     :get-leaf="item.getLeaf"
                     :default-expanded-keys="item.defaultExpandedKeys"
                     :default-checked-keys="item.defaultCheckedKeys"
                     @input="bindChange">
    </asp-tree-select>

    <!-- 多选框 -->
    <el-checkbox-group v-else-if="item.type === 'checkbox-group'"
                       :value="value"
                       @input="bindChange">
      <el-checkbox v-for="(cell, index) in item.options"
                   :label="cell.label"
                   :key="index"
                   :disabled="isDisabled(cell)">{{ cell.label }}</el-checkbox>
    </el-checkbox-group>

    <!-- 单选框 -->
    <el-radio-group v-else-if="item.type === 'radio-group'"
                    :value="value"
                    @input="bindChange">
      <el-radio v-for="(cell, index) in item.options"
                :label="cell.label"
                :key="index"
                :disabled="isDisabled(cell)">{{ cell.label }}</el-radio>
    </el-radio-group>

    <span v-else-if="item.type === 'tips'"
          class="tips">{{ item.tips }}</span>
  </el-form-item>
</template>

<script>
import moment from 'moment'
export default {
  name: 'FormItem',
  props: ['value', 'item', 'lazy', 'load'],
  data () {
    const _t = this
    return {
      data: [],
      pickerOptions: {
        disabledDate (time) {
          if (_t.item.disabledDate) {
            if (_t.item.disabledDate[0] && _t.item.disabledDate[1]) {
              return time.getTime() < moment(new Date()).add(_t.item.disabledDate[0], 'days') || time.getTime() > moment(new Date()).add(_t.item.disabledDate[1], 'days')
            } else if (_t.item.disabledDate[0] && !_t.item.disabledDate[1]) {
              return time.getTime() < moment(new Date()).add(_t.item.disabledDate[0], 'days')
            } else if (!_t.item.disabledDate[0] && _t.item.disabledDate[1]) {
              return time.getTime() > moment(new Date()).add(_t.item.disabledDate[1], 'days')
            }
          }
        }
      }
    }
  },
  mounted () {
    // console.log(this.item, this.value)
    // console.log(this.value)
    // this.model.name = '123';
  },
  methods: {
    bindChange (e) {
      this.$emit('input', e)
    },
    datePickerChange (val) {
      this.bindChange(val)
    },
    isDisabled (item) {
      if (typeof item.disabled === 'function') {
        const obj = { key: item.columnName, model: this.model }
        return item.disabled(obj)
      }
      return !!item.disabled
    },
    isReadonly (item) {
      if (typeof item.readonly === 'function') {
        const obj = { key: item.columnName, model: this.model }
        return item.readonly(obj)
      }
      return !!item.readonly
    },
    doIcon (item) {
      if (typeof item.icon === 'object') {
        return item.icon.slot
      }
      return 'suffix'
    },
    doComplex (item) {
      if (typeof item.complex === 'object') {
        return item.complex.slot
      }
      return 'append'
    },
    doSelectOptions () {
      if (this.item.options) {
        return this.item.options
      }
    },
    handleCommand (e) {
      if (!this.item.func) {
        return
      }
      this.item.func(e)
    }
  }
}
</script>

<style scoped lang="scss">
.tips {
  color: rgb(153, 153, 153);
}
.form-create-item {
  .el-select,
  .el-date-editor {
    width: 100%;
  }
}
</style>
