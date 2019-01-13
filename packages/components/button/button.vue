<template>
  <button
    @click="$emit('click')"
    class="imax__button"
    :class="[
      `imax__button--${type}`,
      `imax__button--size-${size}`,
      {
        'imax__button--circle': circle,
        'imax__button--long': long
      }
    ]"
    :disabled="disabled">
    <i v-if="showIcon" :class="icon" class="imax-icon"></i>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'i-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    circle: {
      type: Boolean,
      default: false
    },
    long: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showIcon() {
      return this.icon !== '';
    }
  }
};
</script>
