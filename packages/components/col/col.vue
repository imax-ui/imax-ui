<script>
export default {
  name: 'Col',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    col: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: null
    }
  },
  render (h) {
    return h(this.tag, {
      class: [
        'imax-col',
        `imax-col-${this.col}`,
        this.offset ? `imax-col-offset-${this.offset}` : ''
      ]
    }, this.$slots.default);
  }
};
</script>
