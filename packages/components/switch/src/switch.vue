<template>
  <div
    class="imax-switch"
    @click.stop="handleClick"
    :class="{
      'is-active': isActive,
      'is-disabled': disabled
    }"
  >
    <input
      :name="name"
      class="imax-switch__input"
      :disabled="disabled"
      v-model="isActive"
      type="checkbox"
    />
    <span class="imax-switch__inner"></span>
  </div>
</template>

<script>
export default {
  name: 'ImSwitch',

  data() {
    return {
      isActive: false
    }
  },
  
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

  watch: {
    value(val) {
      this.updateActive(val === this.activeValue);
    }
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
  },

  mounted() {
    this.isActive = this.value === this.activeValue;
  }
}
</script>

