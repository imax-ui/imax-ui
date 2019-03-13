<template>
  <div 
    class="imax-carousel"
    @mouseenter.stop="mouseEnterHandle"
    @mouseleave.stop="mouseLeaveHandle">
    <slot></slot>

    <template v-if="arrowShowType !== 'never'">
      <transition name="carousel-arrow-left">
        <div 
          class="imax-carousel__arrow imax-carousel--left" 
          v-show="(isLoop || currentIndex > 0) && isTouch">
          ←
        </div>
      </transition>
      <transition name="carousel-arrow-right">
        <div 
          class="imax-carousel__arrow imax-carousel--right" 
          v-show="(isLoop || currentIndex < items.length - 1) && isTouch">
          →
        </div>
      </transition>
    </template>

  </div>
</template>

<script>
export default {
  name: 'ImCarousel',
  data() {
    return {
      items: [],
      currentIndex: -1,
      isTouch: false
    };
  },
  props: {
    arrowShowType: {
      type: String,
      default: 'always'
    },
    isLoop: {
      type: Boolean,
      default: false
    },
    isCard: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    arrowShowType(val) {
      if (val === 'always') {
        this.isTouch = true;
      }
    }
  },
  computed: {
    
  },
  methods: {
    mouseEnterHandle() {
      this.arrowShowType !== 'always' && (this.isTouch = true);
    },
    mouseLeaveHandle() {
      this.arrowShowType !== 'always' && (this.isTouch = false);
    }
  }
}
</script>

