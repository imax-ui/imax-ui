import Message from './src/main';

export default {
  install(Vue) {
    Vue.prototype.$Message = Message;
  }
};
