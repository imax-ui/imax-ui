<template>
  <div
    class="imax-switch"
    :class="{
      'is-active': isActive,
      'is-disabled': disabled
    }"
    @click.stop="handleClick"
  >
    <input
      v-model="isActive"
      :name="name"
      class="imax-switch__input"
      :disabled="disabled"
      type="checkbox"
    >
    <span class="imax-switch__inner" />
  </div>
</template>

<script>
export default {
  name: 'ImSwitch',
  
  props: {
    name: String,
    value: [Number, String, Boolean],
    disabled: Boolean,
    activeValue: {
      type: [Number, String, Boolean],
      default: true
    },
    inactiveValue: {
      type: [Number, String, Boolean],
      default: false
    }
  },

  data() {
    return {
      isActive: false
    }
  },

  watch: {
    value(val) {
      this.updateActive(val === this.activeValue);
    }
  },

  mounted() {
    this.isActive = this.value === this.activeValue;
  },

  methods: {
    handleClick() {
      if (this.disabled) return;

      this.updateActive(!this.isActive);
    },
    updateActive(isActive) {
      if (this.isActive === isActive) return;

      this.isActive = isActive;
      this.$emit('change', isActive);
      this.$emit('input', this.isActive ? this.activeValue : this.inactiveValue);
    }
  }
}
</script>

