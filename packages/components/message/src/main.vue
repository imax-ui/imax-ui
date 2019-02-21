<template>
  <transition name="imax__message-fade">
    <div
      v-show="visible"
      class="imax__message"
      :class="[messageClassName]"
    >
      <div class="imax__message__inner">
        <i
          class="imax-icon"
          :class="[iconClasName]"
        />
        <div class="imax__message__content">
          {{ message }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      message: '',
      type: '',
      icon: 'info',
      onClose: null,
      duration: 1000,
      timer: null,
      closed: false
    }
  },
  computed: {
    messageClassName() {
      return this.type !== '' ? `imax__message-${this.type}` : '';
    },
    iconClasName() {
      switch (this.type) {  
        case 'success':
          return 'icon-success'
          break;
        case 'error':
          return 'icon-error'
          break;
        default:
        return 'icon-info'
          break;
      }
    },
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener('transitionend', this.destroyElement);
      }
    }
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        console.log('-----------------------');
        console.log(this);
        this.onClose(this);
      }
    },
    startTimer() {
      console.log('-----------------------');
      console.log(this.duration);
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          console.log('-----------------------');
          console.log(this.closed);
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
  }
}
</script>
