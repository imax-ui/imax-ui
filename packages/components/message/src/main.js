import main from './main.vue';
import Vue from 'vue';

let MessageConstructor = Vue.extend(main);

let instance;
let instances = [];
let seed = 0;
let zIndex = 1;

const Message = function(options = {}) {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  let userOnClose = options.onClose;
  let _id = 'message_' + seed++;

  options.onClose = function() {
    Message.close(_id, userOnClose);
  };

  instance = new MessageConstructor({
    data: options
  })
  instance.id = _id;

  instance.vm = instance.$mount();
  document.body.append(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = 1;
  instances.push(instance);
  return instance;
}

Message.close = function(id) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      instances.splice(i, 1);
      break;
    }
  }
}

Message.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
}

Message.componentName = 'message';

export default Message;
