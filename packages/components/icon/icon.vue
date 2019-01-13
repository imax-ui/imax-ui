<template>
  <i :class="[`imax-icon-${type}`]" :style="{fontSize, color}"></i>
</template>

<script>
export default {
  name: 'i-icon',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: [String, Number],
      default: 12
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    fontSize() {
      const type = Object.prototype.toString.call(this.size);
      if (type === "[object Number]") {
        return `${this.size}px`
      }
      else {
        return this.size;
      }
    }
  }
};
</script>
