<template>
  <div 
    class="imax__textarea"
    :style="{ fontSize: inputFontSize }">
    <textarea 
      :value="value"
      class="imax__textarea--inner"
      :class="[
        {
          'imax__textarea--disabled': disabled
        }
      ]"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur" />
  </div>
</template>
<script>
export default {
  name: 'Textarea',
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
        return `${this.fontSize}px`
      }
      else {
        return this.fontSize;
      }
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
}
</script>
