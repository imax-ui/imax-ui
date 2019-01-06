<script>
export default {
  name: 'iCol',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    col: {
      type: Number,
      default: 24
    }
  },
  render (h) {
    return h(this.tag, {
      class: [
        'imax__col',
        `imax__col--${this.col}`
      ]
    }, this.$slots.default);
  }
};
</script>
