<template>
  <div
    class="imax-confirm"
  >
    <div
      class="imax-confirm__body"
    >
      <div
        class="imax-confirm__container"
        :class="{
          'is-mounted': opened
        }"
      >
        <div class="imax-confirm--header">
          <div class="imax-aler--title">
            {{ title }}
          </div>
        </div>
        <div class="imax-confirm--inner">
          {{ message }}
        </div>
        <div class="imax-confirm--footer">
          <im-button
            :type="cancelBtnType"
            @click="cancel"
          >
            {{ cancelBtnText }}
          </im-button>
          <im-button
            :type="confirmBtnType"
            @click="confirm"
          > 
            {{ confirmBtnText }}
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
import ImButton from 'packages/components/button/button';
export default {
  name: 'ImConfirm',
  components: {
    ImButton
  },
  data() {
    return {
      message: '',
      title: '标题',
      confirmBtnText: '确定',
      confirmBtnType: 'primary',
      cancelBtnText: '取消',
      cancelBtnType: '',
      visible: false,
      closed: false,
      onCancel: null,
      onConfirm: null,
      opened: false
    }
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
    confirm() {
      this.opened = false;
      this.closed = true;
      if (typeof this.onCancel === 'function') {
        this.onConfirm(this);
      }
    },
    cancel() {
      this.opened = false;
      this.closed = true;
      if (typeof this.onConfirm === 'function') {
        this.onCancel(this);
      }
    },
    close() {
      this.opened = false;
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    }
  }
}
</script>
