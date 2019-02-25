/**
 * Date: 19/01/04
 */

/* base */
import './themes/index.scss';
import Button from './components/button';
import ButtonGroup from './components/button-group';
import Icon from './components/icon';
import Row from './components/row';
import Col from './components/col';
import Input from './components/input';
import Textarea from './components/textarea';
import Radio from './components/radio';
import CheckBox from './components/check-box';
import Select from './components/select';
import Option from './components/option';
import Dropdown from './components/dropdown';

/* Message */
import Message from './components/message';
import Alert from './components/alert'; 

const components = [
  Button,
  ButtonGroup,
  Icon,
  Row,
  Col,
  Input,
  Textarea,
  Radio,
  CheckBox,
  Select,
  Option,
  Dropdown
];

const messages = [
  Message,
  Alert
]

const install = function(Vue) {
  if (install.installed) {
    return;
  }
  components.map(component => Vue.component(component.name, component));
  messages.forEach(comp => {
    Vue.prototype[`$${comp.componentName}`] = comp;
  });
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
  Radio,
  CheckBox,
  Select,
  Option,
  Dropdown,
  Message,
  Alert
};