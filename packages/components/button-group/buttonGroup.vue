<script>
export default {
  name: 'ImButtonGroup',
  render(h) {
    return h('div', {
      class: 'imax__button--group'
    }, this.$slots.default);
  }
};
</script>
