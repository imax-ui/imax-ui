<template>
  <transition
    name="fade-in-top"
  >
    <div
      v-show="visible"
      class="imax-alert"
    >
      <div class="imax-alert__header">
        <div class="imax-alert--title">
          {{ title }}
        </div>
      </div>
      <div class="imax-alert__inner">
        {{ message }}
      </div>
      <div class="imax-alert__confirm-text">
        {{ confirmText }}
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      title: '',
      confirmText: '',
      visible: false,
      closed: false,
      onClose: null,
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
      }
    }
  },
  methods: {
    destroyElement() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },
  }
}
</script>
