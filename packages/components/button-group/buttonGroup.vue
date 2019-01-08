<script>
export default {
  name: 'iButtonGroup',
  render(h) {
    return h('div', {
      class: 'imax__button--group'
    }, this.$slots.default);
  }
};
</script>
