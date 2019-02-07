import Button from 'packages/components/button/button.vue';
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

describe('Button', function() {
  // 挂载组件，得到包裹器
  const wrapper = shallowMount(Button, {
    propsData: {
      type: 'primary',
      size: 'large',
      icon: 'camera',
      circle: true,
      long: true,
      disabled: true
    }
  });

  it('create', () => {
    const buttonEl = wrapper.vm.$el;
    expect(buttonEl.classList.contains('imax__button--primary')).to.be.true;
  });

  it('size', () => {
    const buttonEl = wrapper.vm.$el;
    expect(buttonEl.classList.contains('imax__button--size-large')).to.be.true;
  })

  it('icon', () => {
    const buttonEl = wrapper.vm.$el;
    expect(buttonEl.querySelector('.imax-icon')).to.be.ok;
  }) 

  it('circle', () => {
    const buttonEl = wrapper.vm.$el;
    expect(buttonEl.classList.contains('imax__button--circle')).to.be.true;
  })

  it('long', () => {
    const buttonEl = wrapper.vm.$el;
    expect(buttonEl.classList.contains('imax__button--long')).to.be.true;
  })

  it('disable', () => {
    const buttonEl = wrapper.vm.$el;
    expect(buttonEl.classList.contains('imax__button--disabled')).to.be.true;
  })
  
  it('click', () => {
    wrapper.vm.$emit('click')
  })
});