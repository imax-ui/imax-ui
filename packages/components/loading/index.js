import directive from './src/directive.js';

export default {
  install(Vue) {
    Vue.use(directive);
  },
  directive
};