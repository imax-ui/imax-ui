<template>
  <div 
    class="imax-carousel"
    @mouseenter.stop="event => mouseActivityHandle(true)"
    @mouseleave.stop="event => mouseActivityHandle(false)"
  >
    <slot />

    <template v-if="arrowShowType !== 'never'">
      <div 
        :class="[
          'imax-carousel__arrow', 
          'imax-carousel--left', 
          (loop || currentIndex > 0) && touch && 'imax-carousel--showleft']"
        @click="clickArrowHandle('left')"
      >
        ←
      </div>
      <div 
        :class="[
          'imax-carousel__arrow', 
          'imax-carousel--right', 
          (loop || currentIndex < items.length - 1) && touch && 'imax-carousel--showright']"
        @click="clickArrowHandle('right')"
      >
        →
      </div>
    </template>
  </div>
</template>

<script>

export default {
  name: 'ImCarousel',
  props: {
    arrowShowType: {
      type: String,
      default: 'always'
    },
    loop: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      items: [],
      currentIndex: 0,
      touch: false,
      intervalTimer: null,
      autoplayNextMode: 'right'
    };
  },
  watch: {
    arrowShowType(val) {
      if (val === 'always') {
        this.touch = true;
      }
    },
    autoplay(val) {
      if (!val) {
        this.intervalTimer && clearInterval(this.intervalTimer);
        return;
      }
      this.initInterval();
    }
  },
  beforeDestroy() {
    this.intervalTimer && clearInterval(this.intervalTimer);
  },
  mounted() {
    this.updateItems();
    if (this.autoplay) {
      this.initInterval();
    }
  },
  methods: {
    updateItems() {
      this.items = this.$children.filter((child, index) => {
        const isChildren = child.$options.name === 'ImCarouselItem';
        if (isChildren) {
          child.updateHandle(this.$children.length, this.currentIndex, index);
        }
        return isChildren;
      });
    },
    initInterval() {
      if (this.$children.length < 2) return;
      const isNum = !isNaN(this.interval) && this.interval > 0;
      this.intervalTimer = setInterval(() => {
        if (!this.loop) {
          if (this.currentIndex === this.items.length - 1 && this.autoplayNextMode === 'right') {
            this.autoplayNextMode = 'left';
          }
          else if (this.currentIndex === 0 && this.autoplayNextMode === 'left') {
            this.autoplayNextMode = 'right';
          }
        }
        this.clickArrowHandle(this.autoplayNextMode);
        this.updateItems();
      }, isNum ? this.interval : 3000);
    },
    mouseActivityHandle(status) {
      if (status) this.intervalTimer && clearInterval(this.intervalTimer);
      else this.initInterval();

      if (this.arrowShowType === 'always') return;

      this.touch = status;
    },
    clickArrowHandle(type) {
      const [isHead, isLast] = [this.currentIndex < 1, this.currentIndex >= this.$children.length - 1];
      if ((isHead && type === 'left') || (isLast && type === 'right')) {
        if(!this.loop) return;
        this.currentIndex = isHead ? this.items.length - 1 : 0;
        this.updateItems();
        return;
      }
      const addNum = type === 'left' ? -1 : 1;
      this.currentIndex += addNum;
      this.updateItems();
    }
  }
};
</script>
