<template>
  <div 
    class="imax__input"
    :class="{
      'imax__input--prefix': isPrefix,
      'imax__input--suffix': isSuffix,
    }"
    :style="{ fontSize: inputFontSize }"
  >
    <div
      v-if="isPrefix"
      class="imax__input--prefix-inner"
    >
      <i :class="[`imax-icon icon-${prefixIcon}`]" />
    </div>
    <input 
      :value="value"
      class="imax__input--inner"
      :class="[
        {
          'imax__input--disabled': textareaDisabled
        }
      ]"
      :placeholder="placeholder"
      :disabled="textareaDisabled"
      :readonly="readOnly"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    >
    <div
      v-if="isSuffix"
      class="imax__input--suffix-inner"
    >
      <i
        ref="suffix-icon"
        :class="[`imax-icon icon-${suffixIcon}`]"
      />
    </div>
  </div>
</template>

<script>
import Emitter from 'packages/mixins/emitter';

export default {
  name: 'ImInput',
  inject: {
    imForm: {
      default: ''
    }
  },
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: ''
    },
    size: {
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
    },
    prefixIcon: {
      type: String,
      default: ''
    },
    suffixIcon: {
      type: String,
      default: ''
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      focused: false
    };
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
    isPrefix() {
      return this.prefixIcon && this.prefixIcon !== '';
    },
    isSuffix() {
      return this.suffixIcon && this.suffixIcon !== '';
    },
    textareaDisabled() {
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
      this.focused = true;
      this.$emit('focus');
    },
    handleBlur() {
      this.focused = false;
      this.$emit('blur');
      this.dispatch('ImFormItem', 'im-form.blur');
    }
  }
};
</script>
