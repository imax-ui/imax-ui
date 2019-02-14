<script>
export default {
  name: 'ButtonGroup',
  render(h) {
    return h('div', {
      class: 'imax__button--group'
    }, this.$slots.default);
  }
};
</script>
