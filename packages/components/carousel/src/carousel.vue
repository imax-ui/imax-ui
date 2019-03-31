<template>
  <div 
    :class="[
      'imax-carousel',
      indicatorPosition === 'outside' && 'imax-carousel__indicator-outside']"
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
          (loop || currentIndex < itemsLength - 1) && touch && 'imax-carousel--showright'
        ]"
        @click="clickArrowHandle('right')">
        →
      </div>
    </template>

    <ul class="imax-carousel__indicator" v-if="indicator">
      <li 
        v-for="(item, index) in itemsLength" 
        :key="`indicator_${item}`" 
        class="imax-carousel--indicator-item"
        @click.stop="() => indicatorHandle(index, 'click')"
        @mouseenter="() => indicatorHandle(index, 'hover')">
        <div 
          :class="[
          'imax-carousel__indicator-button',
          currentIndex === index && 'imax-carousel__indicator-current']">
        </div>
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'ImCarousel',
  data() {
    return {
      itemsLength: 0,
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
    },
    initialIndex: {
      type: Number,
      default: 0
    },
    indicator: {
      type: Boolean,
      default: false
    },
    indicatorTrigger: {
      type: String,
      default: 'hover'
    },
    indicatorPosition: {
      type: String,
      default: 'inside'
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
  beforeDestroy() {
    this.intervalTimer && clearInterval(this.intervalTimer);
  },
  mounted() {
    this.checkoutIndex();
    this.updateItems();
    if (this.autoplay) {
      this.initInterval();
    }
  },
  methods: {
    checkoutIndex(index = this.initialIndex) {
      const itemsLength = this.$children.filter(child => {
        return child.$options.name === 'ImCarouselItem';
      }).length;

      const currentIndex = index;
      if (index > itemsLength - 1) currentIndex = 0;
      if (index < 0) currentIndex = 0;
      this.currentIndex = currentIndex;
    },
    indicatorHandle(index, handle) {
      if (this.indicatorTrigger === 'none') return;

      if (handle === 'click' && this.indicatorTrigger === 'hover') {
        return;
      }

      if (handle === 'hover' && this.indicatorTrigger !== 'hover') {
        return;
      }

      this.currentIndex = index;
      this.updateItems();
    },
    updateItems() {
      const items = this.$children.filter((child, index) => {
        const isChildren = child.$options.name === 'ImCarouselItem';
        if (isChildren) {
          child.updateHandle(this.$children.length, this.currentIndex, index);
        }
        return isChildren;
      });
      this.itemsLength = items.length;
    },
    initInterval() {
      if (this.$children.length < 2) return;
      const isNum = !isNaN(this.interval) && this.interval > 0;
      this.intervalTimer = setInterval(() => {
        if (!this.loop) {
          if (this.currentIndex === this.itemsLength - 1 && this.autoplayNextMode === 'right') {
            this.autoplayNextMode = 'left';
          }
          else if (this.currentIndex === 0 && this.autoplayNextMode === 'left') {
            this.autoplayNextMode = 'right';
          }
        }
        this.clickArrowHandle(this.autoplayNextMode);
      }, isNum ? this.interval : 3000);
    },
    mouseActivityHandle(status) {
      if (status) this.intervalTimer && clearInterval(this.intervalTimer);
      
      if (this.autoplay) this.initInterval();

      if (this.arrowShowType === 'always') return;

      this.touch = status;
    },
    clickArrowHandle(type) {
      const [isHead, isLast] = [this.currentIndex < 1, this.currentIndex >= this.$children.length - 1];
      if ((isHead && type === 'left') || (isLast && type === 'right')) {
        if(!this.loop) return;
        this.currentIndex = isHead ? this.itemsLength - 1 : 0;
        this.updateItems();
        return;
      }
      const addNum = type === 'left' ? -1 : 1;
      this.currentIndex += addNum;
      this.updateItems();
    },
    prev() {
      this.clickArrowHandle('left');
    },
    next() {
      this.clickArrowHandle('right');
    },
    checkoutActiveItem(index = 0) {
      this.checkoutIndex(index);
      this.updateItems();
    }
  }
};
</script>
