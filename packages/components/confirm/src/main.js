import Vue from 'vue';
import Main from './main.vue';

const ConfirmConstructor = Vue.extend(Main);

let instance;
let instances = [];
let seed = 0;
let zIndex = 1;

const Confirm = function(options) {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  let userOnCancel = options.onCancel;
  let userOnConfirm  = options.onConfirm;
  let _id = `confirm_${++seed}`;

  options.onCancel = function() {
    Confirm.close(_id, userOnCancel);
  };

  options.onConfirm = function() {
    Confirm.confirm(_id, userOnConfirm);
  };

  instance = new ConfirmConstructor({
    data: options
  });
  instance.id = _id;

  instance.vm = instance.$mount();
  document.body.append(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = ++zIndex;
  instances.push(instance);
  return instance;
}

Confirm.close = function(id, userOnCancel) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnCancel === 'function') {
        userOnCancel();
      }
      instances.splice(i, 1);
      break;
    }
  }
}

Confirm.confirm = function(id, userOnConfirm) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnConfirm === 'function') {
        userOnConfirm();
      }
      instances.splice(i, 1);
      break;
    }
  }
}

Confirm.componentName = 'Confirm';

export default Confirm;