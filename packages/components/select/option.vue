<template>
  <div
    class="imax__option"
    :class="{
      'imax__option-select': selected
    }"
    @click.stop="handleSelect"
  >
    <span>
      <template v-if="label">
        {{ label }}
      </template>
      <template v-else>
        {{ value }}
      </template>
    </span>
  </div>
</template>

<script>
import emitter from 'packages/mixins/emitter';
export default {
  name: 'ImOption',
  mixins: [emitter],
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selected: false,
      hover: false
    }
  },
  created() {
    this.$on('change', this.handleChange);
  },
  methods: {
    handleSelect() {
      this.selected = true;
      this.dispatch('Select','select', this.value);
    },
    handleChange(ret) {
      if (ret !== this.value) {
        this.selected = false;
      }
    }
  }
}
</script>
