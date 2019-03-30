<template>
  <div 
    class="imax__textarea"
    :style="{ fontSize: inputFontSize }"
  >
    <textarea 
      :value="value"
      class="imax__textarea--inner"
      :class="[
        {
          'imax__textarea--disabled': inputDisabled
        }
      ]"
      :placeholder="placeholder"
      :disabled="inputDisabled"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </div>
</template>
<script>
import Emitter from 'packages/mixins/emitter';

export default {
  name: 'ImTextarea',
  mixins: [Emitter],
  inject: ['imForm'],
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    fontSize: {
      type: [Number, String],
      default: 12
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputFontSize() {
      const type = Object.prototype.toString.call(this.fontSize);
      if (type === "[object Number]") {
        return `${this.fontSize}px`;
      }
      else {
        return this.fontSize;
      }
    },
    inputDisabled() {
      return this.disabled || (this.imForm || {}).disabled;
    }
  },
  methods: {
    handleInput(e) {
      const value = e.target.value;
      if (value === this.value) return;
      this.$emit('input', value);
      this.dispatch('ImFormItem', 'im-form.change');
    },
    handleFocus() {
      this.$emit('focus');
    },
    handleBlur() {
      this.$emit('blur');
      this.dispatch('ImFormItem', 'im-form.blur');
    }
  }
};
</script>
