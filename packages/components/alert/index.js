import main from './src/main';

export default {
  install(Vue) {
    Vue.prototype.$Alert = main;
  }
};
