<!--
 * @Author: liuqiyu
 * @Date: 2019-12-20 10:39:54
 * @LastEditTime : 2019-12-27 14:58:31
 * @LastEditors  : liuqiyu
 * @Description: In User Settings Edit
 * @FilePath: \pcc_front1\src\views\pcc\commodity\add\create\common\form-create\query-form.vue
 -->
<template>
  <el-form-item :label="item.label"
                :prop="item.columnName"
                :rules="item.rules || []">
    <!-- 文本 -->
    <div v-if="item.type === 'txt'"
         :class="item.class"
         :style="item.style"
         class="txt">
      {{ value }}
    </div>

    <!--input 文本-->
    <el-input v-if="item.type === undefined || item.type === 'input' || item.type === 'number'"
              :class="item.class"
              :style="item.style"
              :type="item.type === undefined ? 'text' : item.type"
              :value="value"
              v-bind="item.props"
              @input="bindChange">
      <!-- 图标 -->
      <i v-if="item.slot && !item.button"
         :slot="item.slot || 'append'"
         :class="item.icon"
         class="el-input__icon"
         @click.stop="handleInputClick"> {{ item['slot-name'] }}</i>
      <!-- 按钮 -->
      <el-button v-if="item.slot && item.button"
                 :slot="item.slot || 'append'"
                 :icon="item.icon"
                 @click.stop="handleInputClick">
        {{ item['slot-name'] }}</el-button>
    </el-input>

    <!--textarea-->
    <el-input v-else-if="item.type === 'textarea'"
              :class="item.class"
              :style="item.style"
              :value="value"
              v-bind="item.props"
              type="textarea"
              @input="bindChange">
    </el-input>

    <!-- input-number -->
    <el-input-number v-if="item.type === 'inputNumber'"
                     :class="item.class"
                     :style="item.style"
                     :value="value"
                     v-bind="item.props"
                     @input="bindChange">
    </el-input-number>

    <!--select 下拉框-->
    <el-select v-else-if="item.type === 'select'"
               :class="item.class"
               :style="item.style"
               :value="value"
               v-bind="item.props"
               @change="bindChange">
      <el-option label="--请选择--"
                 value=""></el-option>
      <el-option v-for="(cell, index) in item.options"
                 :key="cell.value + index"
                 :label="cell.label"
                 :value="cell.value">
      </el-option>
    </el-select>

    <!-- TimeSelect 时间选择器 -->
    <el-time-select v-else-if="item.type ==='timeSelect'"
                    :value="value"
                    :class="item.class"
                    :style="item.style"
                    v-bind="item.props"
                    @input="bindChange">
    </el-time-select>

    <!-- TimePicker 时间选择器 -->
    <el-time-picker v-else-if="item.type ==='timePicker'"
                    :value="value"
                    :class="item.class"
                    :style="item.style"
                    v-bind="item.props"
                    @input="bindChange">
    </el-time-picker>

    <!--DatePicker 日期选择器  date/week/month/year -->
    <el-date-picker v-else-if="item.type === 'datePicker'"
                    :class="item.class"
                    :style="item.style"
                    :value="value"
                    v-bind="item.props"
                    @input="bindChange">
    </el-date-picker>

    <!--DateTimePicker 日期时间选择器-->
    <el-date-picker v-else-if="item.type === 'dateTimePicker'"
                    :class="item.class"
                    :style="item.style"
                    :value="value"
                    v-bind="item.props"
                    @input="bindChange">
    </el-date-picker>

    <!-- 多选框 -->
    <el-checkbox-group v-else-if="item.type === 'checkbox'"
                       :class="item.class"
                       :style="item.style"
                       :value="value"
                       v-bind="item.props"
                       @input="bindChange">
      <el-checkbox v-for="(cell, index) in item.options"
                   :label="cell.value"
                   :value="cell.value"
                   :key="index"
                   :disabled="cell.disabled">{{ cell.label }}</el-checkbox>
    </el-checkbox-group>

    <!-- 单选框 -->
    <el-radio-group v-else-if="item.type === 'radio'"
                    :value="value"
                    :class="item.class"
                    :style="item.style"
                    v-bind="item.props"
                    @input="bindChange">
      <el-radio v-for="(cell, index) in item.options"
                :label="cell.value"
                :value="cell.value"
                :key="index"
                :disabled="cell.disabled">{{ cell.label }}</el-radio>
    </el-radio-group>

    <!-- Cascader 级联选择器 -->
    <el-cascader v-else-if="item.type === 'cascader'"
                 :value="value"
                 :options="item.options"
                 :class="item.class"
                 :style="item.style"
                 v-bind="item.props"
                 @change="bindChange">
    </el-cascader>

    <!-- Switch 开关-->
    <el-switch v-else-if="item.type === 'switch'"
               :value="value"
               :class="item.class"
               :style="item.style"
               v-bind="item.props"
               @input="bindChange">
    </el-switch>

    <!-- Slider 滑块 -->
    <el-slider v-else-if="item.type === 'slider'"
               :value="value"
               :class="item.class"
               :style="item.style"
               v-bind="item.props"
               @input="bindChange">
    </el-slider>

    <!-- Rate 评分 -->
    <el-rate v-else-if="item.type === 'rate'"
             :value="value"
             :class="item.class"
             :style="item.style"
             v-bind="item.props"
             @input="bindChange">
    </el-rate>

    <template v-else-if="item.type === 'dateList'">
      <el-date-picker :picker-options="item.pickerOptions[0]"
                      :value="value[0]"
                      :placeholder="item.placeholder"
                      type="date"
                      :class="item.class"
                      :style="item.style"
                      format="yyyy-MM-dd"
                      value-format="yyyy-MM-dd"
                      style="width: 46%"
                      @input="bindChangeDateList0">
      </el-date-picker>
      <span>至</span>
      <el-date-picker :picker-options="item.pickerOptions[1]"
                      :value="value[1]"
                      :placeholder="item.placeholder"
                      type="date"
                      :class="item.class"
                      :style="item.style"
                      format="yyyy-MM-dd"
                      value-format="yyyy-MM-dd"
                      style="width: 47%"
                      @input="bindChangeDateList1">
      </el-date-picker>
    </template>

    <span v-else-if="item.type === 'tips'"
          :class="item.class"
          :style="item.style"
          class="tips">{{ item.tips }}</span>
  </el-form-item>
</template>

<script>
import moment from 'moment'
export default {
  name: 'FormItem',
  props: {
    item: {
      type: Object,
      default: () => { }
    },
    value: {
      type: [Array, String, Number],
      default: () => null
    }
  },
  data () {
    const _t = this
    return {
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
  created () {
    const _t = this
    if (this.item.type === 'dateList') {
      this.item.pickerOptions = [
        {
          disabledDate (time) {
            let t = Date.now() - 3600 * 1000 * 24
            return time.getTime() < t
          },
          shortcuts: [
            {
              text: '今天',
              onClick (picker) {
                picker.$emit('pick', new Date())
              }
            }
          ]
        },
        {
          disabledDate (time) {
            let t = moment(_t.value, 'YYYY-MM-DD HH:mm:ss').valueOf()
            return time.getTime() < t
          }
        }
      ]
      if (this.item.rules && this.item.rules.length > 0) {
        const message = this.item.rules[0].message
        this.item.rules = [
          {
            required: true,
            validator: (rule, value, callback) => {
              if (!value[0]) {
                callback(new Error(message || '不可为空'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    bindChangeDateList0 (e) {
      this.$emit('input', [e, this.value[1]])
    },
    bindChangeDateList1 (e) {
      this.$emit('input', [this.value[0], e])
    },
    // 输入修改事件
    bindChange (e) {
      this.$emit('input', e)
    },
    handleInputClick () {
      if (this.item.on && this.item.on.length > 0) {
        this.$emit('on-events', {
          item: this.item,
          type: 'click'
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.tips {
  color: rgb(153, 153, 153);
}
</style>
