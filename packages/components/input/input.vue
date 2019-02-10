<template>
  <div 
    class="imax__input"
    :class="{
      'imax__input--prefix': isPrefix,
      'imax__input--suffix': isSuffix,
    }"
    :style="{ fontSize: inputFontSize }">
    <div class="imax__input--prefix-inner" v-if="isPrefix">
      <i :class="[`imax-icon imax-icon-${prefixIcon}`]"></i>
    </div>
    <input 
      :value="value"
      class="imax__input--inner"
      :class="[
        {
          'imax__input--disabled': disabled
        }
      ]"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur">
    <div class="imax__input--suffix-inner" v-if="isSuffix">
      <i :class="[`imax-icon imax-icon-${suffixIcon}`]"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'i-input',
  props: {
    value: {
      type: String,
      default: ''
    },
    size: {
      type: String
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
      type: String
    },
    suffixIcon: {
      type: String
    }
  },
  computed: {
    inputFontSize() {
      const type = Object.prototype.toString.call(this.fontSize);
      if (type === "[object Number]") {
        return `${this.fontSize}px`
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
    }
  },
  methods: {
    handleInput(e) {
      const value = e.target.value;
      if (value === this.value) return;
      this.$emit('input', value);
    },
    handleFocus() {
      this.$emit('focus');
    },
    handleBlur() {
      this.$emit('blur');
    }
  }
};
</script>
