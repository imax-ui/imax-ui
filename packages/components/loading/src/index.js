import Vue from 'vue';
import loadingVue from './loading';

const LoadingConstructor = Vue.extend(loadingVue);

const defaults = {
  text: null,
  fullscreen: true,
  body: false,
  lock: false,
  customClass: ''
};

let fullscreenLoading;

LoadingConstructor.prototype.originalPosition = '';
LoadingConstructor.prototype.originalOverflow = '';