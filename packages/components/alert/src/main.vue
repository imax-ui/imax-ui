<template>
  <div
    class="imax-alert"
  >
    <div
      class="imax-alert__body"
    >
      <div
        class="imax-alert__container"
        :class="{
          'is-mounted': opened
        }"
      >
        <div class="imax-alert--header">
          <div class="imax-aler--title">
            {{ title }}
          </div>
        </div>
        <div class="imax-alert--inner">
          {{ message }}
        </div>
        <div class="imax-alert--footer">
          <im-button @click="close">
            {{ confirmText }}
          </im-button>
        </div>
      </div>
    </div>
    <div
      class="imax-mask"
      :class="{'is-show': opened}"
      @click.stop="close"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      title: '标题',
      confirmText: '确定',
      visible: false,
      closed: false,
      onClose: null,
      opened: false
    };
  },
  watch: {
    visible(val) {
      if (val) {
        setTimeout(() => {
          this.opened = val;
        }, 0);
      }
    },
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener('transitionend', this.destroyElement);
      }
    }
  },
  methods: {
    destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.opened = false;
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },
  }
};
</script>
