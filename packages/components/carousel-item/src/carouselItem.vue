<template>
  <div 
    class="imax-carousel__item"
    :style="{
      msTransform: `translateX(${translateX}px)`,
      webkitTransform: `translateX(${translateX})px`,
      transform: `translateX(${translateX}px)`,
      zIndex: currentIndex === index ? 2 : 1
    }"
  >
    CarouselItem - {{ index }}
  </div>
</template>

<script>
export default {
  name: 'ImCarouselItem',
  data() {
    return {
      index: 0,
      currentIndex: 0,
      translateX: 0
    };
  },
  methods: {
    updateHandle(itemsLength, currentIndex, index) {
      this.index = index;
      this.currentIndex = currentIndex;
      
      if (currentIndex === index) {
        this.translateX = 0;
        return;
      }
      
      const { offsetWidth } = this.$parent.$el;

      if (currentIndex === 0 && index === itemsLength - 1) {
        this.translateX = 0 - offsetWidth;
        return;
      }

      if (index === 0 && currentIndex === itemsLength - 1) {
        this.translateX = offsetWidth;
        return;
      }

      const marginIndex = index - currentIndex;
      this.translateX = marginIndex * offsetWidth;
    }
  }
};
</script>

