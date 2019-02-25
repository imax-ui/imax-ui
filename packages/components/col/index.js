/**
 * Date: 19/01/06
 */

import Col from './col.vue';

Col.install = function(Vue) {
  Vue.component(Col.name, Col);
}

export default Col;