const resolve = require('path').join;
const fileSave = require('file-save');
const upperCamelCase = require('uppercamelcase');
const kebabCase = require('lodash.kebabcase');

const components = require('../components.json');
const filename = resolve(__dirname, '../packages/index.js');
const content = `\
/* This file is automatically generated by 'build/build-entry.js' */

import './themes/index.scss';
${
  Object.keys(components).map(componentName => {
    return `import ${ upperCamelCase(componentName) } from './components/${ kebabCase(componentName) }';`;
  }).join('\n')
}

const components = [
  ${
    Object.keys(components).map(componentName => {
      return upperCamelCase(componentName);
    }).join(',\n  ')
  }
];

const install = function(Vue) {
  if (install.installed) return;

  components.map(component => {
    Vue.use(component);
  });

  install.installed = true;
};

export default {
  install,
  ${
    Object.keys(components).map(componentName => {
      return `${ upperCamelCase(componentName) }`;
    }).join(',\n  ')
  }
};
`;

fileSave(filename).write(content, 'utf8');
