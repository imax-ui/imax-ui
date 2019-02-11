/**
 * @author choo
 * Date: 19/01/04
 */
import './themes/index.scss';
import Button from './components/button';
import ButtonGroup from './components/button-group';
import Icon from './components/icon';
import Row from './components/row';
import Col from './components/col';
import Input from './components/input';
import Textarea from './components/textarea';
import Radio from './components/radio';

const components = [
  Button,
  ButtonGroup,
  Icon,
  Row,
  Col,
  Input,
  Textarea,
  Radio
];

const install = function(Vue) {
  if (install.installed) {
    return;
  }
  components.map(component => Vue.component(component.name, component));
};

export default {
  install, 
  Button,
  ButtonGroup,
  Icon,
  Row,
  Col,
  Input,
  Textarea,
  Radio
};