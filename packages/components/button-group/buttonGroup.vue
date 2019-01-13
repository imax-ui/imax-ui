<script>
export default {
  name: 'i-button-group',
  render(h) {
    return h('div', {
      class: 'imax__button--group'
    }, this.$slots.default);
  }
};
</script>
