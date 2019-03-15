import CarouselItem from './src/carouselItem.vue';

CarouselItem.install = function(Vue) {
  Vue.component(CarouselItem.name, CarouselItem);
}

export default CarouselItem;

