import slider from './src/slider.vue';

slider.install = function(Vue) {
  Vue.component(slider.name, slider);
};

export default slider;

