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
    }
  }

  let id = `alert_${++seed}`;

  instance = new AlertConstructor();
  instance.id = id;

  instance.vm = instance.$mount();
  document.body.append(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = ++zIndex;
  instances.push(instance);
  return instance;
}

Alert.close = function(id) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      instances.splice(i, 1);
      break;
    }
  }
}

Alert.componentName = 'Alert';

export default Alert;