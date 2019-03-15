<template>
  <div 
    class="imax-carousel"
    @mouseenter.stop="event => mouseActivityHandle(true)"
    @mouseleave.stop="event => mouseActivityHandle(false)">

    <slot></slot>

    <template v-if="arrowShowType !== 'never'">
      <transition name="carousel-arrow-left">
        <div 
          :class="['imax-carousel__arrow', 'imax-carousel--left']"
          v-show="(isLoopCom || currentIndex > 0) && touch"
          @click="clickArrowHandle('left')">
          ←
        </div>
      </transition>
      <transition name="carousel-arrow-right">
        <div 
          :class="['imax-carousel__arrow', 'imax-carousel--right']"
          v-show="(isLoopCom || currentIndex < items.length - 1) && touch"
          @click="clickArrowHandle('right')">
          →
        </div>
      </transition>
    </template>

  </div>
</template>

<script>

import { setInterval, clearInterval } from 'timers';

export default {
  name: 'ImCarousel',
  data() {
    return {
      items: [],
      currentIndex: 0,
      touch: false,
      intervalTimer: null,
      autoplayNextMode: 'right'
    };
  },
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
  computed: {
    isLoopCom() {
      return this.loop && this.items.length > 2;
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
      this.items = this.$children.map((item, index) => {
        item.updateHandle(this.$children.length, this.currentIndex, index);
        return item;
      });
    },
    initInterval() {
      const isNum = !isNaN(this.interval) && this.interval > 0;
      this.intervalTimer = setInterval(() => {
        if (!this.isLoopCom) {
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
        if(!this.isLoopCom) return;
        this.currentIndex = isHead ? this.items.length - 1 : 0;
        this.updateItems();
        return;
      }
      const addNum = type === 'left' ? -1 : 1;
      this.currentIndex += addNum;
      this.updateItems();
    }
  }
}
</script>
