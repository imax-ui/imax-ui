import Vue from 'vue';
import Main from './main.vue';

const AlertConstructor = Vue.extend(Main);

let instance;
let instances = [];
let seed = 0;
let zIndex = 1;

const Alert = function(options) {
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }

  let userOnClose = options.onClose;
  let _id = `alert_${++seed}`;

  options.onClose = function() {
    Alert.close(_id, userOnClose);
  };

  instance = new AlertConstructor({
    data: options
  });
  instance.id = _id;

  instance.vm = instance.$mount();
  instance.vm.visible = true;
  document.body.append(instance.vm.$el);
  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = ++zIndex;
  instances.push(instance);
  return instance;
};

Alert.close = function(id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose();
      }
      instances.splice(i, 1);
      break;
    }
  }
};

Alert.componentName = 'Alert';

export default Alert;