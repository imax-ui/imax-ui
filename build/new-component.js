const path = require('path');
const inquirer = require('inquirer');
const fileSave = require('file-save');
const componentsFile = require('../components.json');
const camelCase = require('camelcase');
const upperCamelCase = require('uppercamelcase');
const resolve = dir => path.join(__dirname, '../', dir);

function ask() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'componentName',
      message: '组件名称：',
      validate(componentName) {
        if (!componentName) {
          return '组件名必填';
        }

        const camelName = camelCase(componentName);
        if (componentsFile[camelName]) {
          return `${ camelName }组件已存在!`;
        }

        return true;
      }
    }
  ]);
}

function generateConf({ componentName }) {
  const camelName = camelCase(componentName);
  const upperCamelName = upperCamelCase(componentName);

  componentsFile[camelName] = `./packages/components/${ camelName }/index.js`;

  const files = [
    { /* components.json */
      filename: resolve('components.json'),
      content: JSON.stringify(componentsFile, null, '  ')
    },
    { /* 组件的入口文件 */
      filename: resolve(`./packages/components/${ camelName }/index.js`),
      content: `\
import ${ upperCamelName } from './src/${ camelName }.vue';

${ upperCamelName }.install = function(Vue) {
  Vue.component(${ upperCamelName }.name, ${ upperCamelName });
}

export default ${ upperCamelName };

`
    },
    { /* 组件文件 */
      filename: resolve(`./packages/components/${ camelName }/src/${ camelName }.vue`),
      content: `\
<template>
  <div class="imax-${ componentName }">${ componentName }</div>
</template>

<script>
export default {
  name: '${ upperCamelName }'
}
</script>

`
    },
    { /* scss 文件 */
      filename: resolve(`./packages/themes/components/${ camelName }.scss`),
      content: `\
@import '../var.scss';
@import '../mixins/mixins.scss';

@include b(${ componentName }) {
}

`
    },
    { /* d.ts 文件 */
      filename: resolve(`./types/${ componentName }.d.ts`),
      content: `\
import Vue from 'vue';

export declare interface ${ upperCamelName } extends Vue {
}

`
    },
    { /* 测试文件 */
      filename: resolve(`./test/specs/${ componentName }.spec.js`),
      content: `\
import ${ upperCamelName } from 'packages/components/${ componentName }/src/${ camelName }.vue';
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';

describe('${ upperCamelName }', function() {
  it('create', () => {
    const wrapper = shallowMount(${ upperCamelName });
    const el = wrapper.vm.$el;
    expect(el.classList.contains('imax-${ componentName }')).to.be.true;
  });
});

`
    }
  ];

  return files;
}

function writeFiles(files) {
  files.forEach(file => {
    fileSave(file.filename)
      .write(file.content, 'utf8');
  });
}

ask()
  .then(generateConf)
  .then(writeFiles)
  .then(() => console.log('创建完成!'));
