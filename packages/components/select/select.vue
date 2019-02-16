<template>
  <div class="imax__select">
    <Input
      ref="input"
      :value="currentPlaceholder"
      suffix-icon="unfold"
      :read-only="readOnly"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <Dropdown
      :show="isShowDropdown"
      :style="{width: inputWidth}"
    >
      <slot />
    </dropdown>
  </div>
</template>

<script>
import emitter from 'packages/mixins/emitter';
import Input from 'packages/components/input';
import Dropdown from 'packages/components/dropdown';
export default {
  name: 'Select',
  components: {
    Input,
    Dropdown
  },
  mixins: [emitter],
  props: {

  },
  data() {
    return {
      currentPlaceholder: null,
      readOnly: true,
      inputWidth: null,
      isShowDropdown: false
    }
  },  
  created() {
    this.$on('select', this.change);
  },
  mounted() {
    const input = this.$refs.input;
    if (input && input.$el) {
      this.inputWidth = this.$refs.input.$el.getBoundingClientRect().width + 'px';
    }
  },
  methods: {
    change(val) {
      this.$nextTick(() => {
        this.currentPlaceholder = val;
        this.$emit('input', val);
        this.broadcast('Option','change', val);
      })
    },
    handleFocus() {
      let icon = this.$refs.input.$refs['suffix-icon'];
      if (icon) {
        icon.style.transform = 'rotateZ(180deg)';
      }
      this.isShowDropdown = true;
      this.$emit('focus');
    },
    handleBlur() {
      let icon = this.$refs.input.$refs['suffix-icon'];
      if (icon) {
        icon.style.transform = 'rotateZ(0deg)';
      }
      this.isShowDropdown = false;
      this.$emit('blur');
    }
  }
}
</script>
