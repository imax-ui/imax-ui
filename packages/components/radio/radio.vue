<template>
  <label
    class="imax__radio"
    :class="[
      {
        'is-checked': isChecked
      }
    ]"
  >
    <span 
      class="imax__radio--input"
      :class="[
        {
          'is-checked': isChecked
        }
      ]"
    >
      <span class="imax__radio--inner" />
      <input 
        v-model="model" 
        type="radio"
        :value="label"
        aria-hidden="true"
        tabindex="-1"
        class="imax__radio--inner-input"
        @change="handleChange"
      >
    </span>
    <span class="imax__radio--label">
      <slot />
      <template v-if="!$slots.default">
        {{ label }}
      </template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'ImRadio',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: [String, Number],
      default: ''
    }
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    },
    isChecked() {
      return this.model === this.label;
    }
  },
  methods: {
    handleChange() {
      this.$emit('change', this.model);
    }
  }
}
</script>

