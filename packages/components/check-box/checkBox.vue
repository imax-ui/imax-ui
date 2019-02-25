<template>
  <label
    class="imax__checkbox"
    :class="[
      {
        'is-checked': isChecked
      }
    ]"
  >
    <span 
      class="imax__checkbox--input"
      :class="[
        {
          'is-checked': isChecked
        }
      ]"
    >
      <span class="imax__checkbox--inner" />
      <input 
        v-model="model"
        class="imax__checkbox--inner-input"
        type="checkbox"
        :name="name"
        :value="label"
        @change="handleChange"
      >
    </span>
    <span class="imax__checkbox--label">
      <slot />
      <template v-if="!$slots.default">
        {{ label }}
      </template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'ImCheckbox',
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: [String],
      default: ''
    },
    name: {
      type: String,
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
      return this.model;
    }
  },
  methods: {
    handleChange() {
      this.$emit('change', this.model);
    }
  }
}
</script>
