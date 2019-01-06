<script>
export default {
  name: 'iRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    },
    gutter: {
      type: Number
    }
  },
  computed: {
    style() {
      const ret = {};
      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`,
        ret.marginRight = `-${this.gutter / 2}px`
      }
      return ret;
    }
  },
  render(h) {
    return h(this.tag, {
      class: [
        'imax__row',
        this.justify !== 'start' ? `imax__row--justify-${this.justify}` : '',
        this.align !== 'top' ? `imax__row--align-${this.align}` : ''
      ],
      style: this.style
    }, this.$slots.default);
  }
}
</script>