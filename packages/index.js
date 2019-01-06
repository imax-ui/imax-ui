/**
 * @author choo
 * Date: 19/01/04
 */
import './themes/index.scss';
import IButton from './components/button';
import Icon from './components/icon';

const components = [
  IButton,
  Icon
];

const install = function(Vue) {
  if (install.installed) {
    return;
  }
  components.map(component => Vue.component(component.name, component));
};

export default {
  install, 
  IButton,
  Icon
};