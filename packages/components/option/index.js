/**
 * Date: 19/02/14
 */

import Option from '../select/option';

Option.install = function(Vue) {
  Vue.component(Option.name, Option);
};

export default Option;