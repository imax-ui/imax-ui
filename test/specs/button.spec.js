import Button from 'packages/components/button/button.vue';
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

describe('Button', function() {
  it('create', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        type: 'primary'
      }
    });
    const buttonEl = wrapper.vm.$el;
    expect(buttonEl.classList.contains('imax__button--primary')).to.be.true;
  });

  it('size', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        size: 'large'
      }
    });
    const buttonEl = wrapper.vm.$el;
    expect(buttonEl.classList.contains('imax__button--size-large')).to.be.true;
  })

  it('icon', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        icon: 'camera'
      }
    });
    const buttonEl = wrapper.vm.$el;
    expect(buttonEl.querySelector('.imax-icon')).to.be.ok;
  }) 

  it('circle', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        circle: true
      }
    });
    const buttonEl = wrapper.vm.$el;
    expect(buttonEl.classList.contains('imax__button--circle')).to.be.true;
  })

  it('long', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        long: true
      }
    });
    const buttonEl = wrapper.vm.$el;
    expect(buttonEl.classList.contains('imax__button--long')).to.be.true;
  })

  it('disable', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        disabled: true
      }
    });
    const buttonEl = wrapper.vm.$el;
    expect(buttonEl.classList.contains('imax__button--disabled')).to.be.true;
  })
  
  it('click', () => {
    const wrapper = shallowMount(Button);
    wrapper.vm.$emit('click')
  })
});