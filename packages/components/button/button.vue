<template>
  <button
    class="imax__button"
    :class="[
      `imax__button--${type}`,
      `imax__button--size-${size}`,
      {
        'imax__button--circle': circle,
        'imax__button--long': long,
        'imax__button--disabled': disabled
      }
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <i
      v-if="showIcon"
      :class="icon"
      class="imax-icon"
    />
    <span>
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'ImButton',
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
