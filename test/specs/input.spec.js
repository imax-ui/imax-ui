import Input from 'packages/components/input/input.vue';
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

describe('Input', function() {
  it('disabled', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        disabled: true
      }
    });
    const inputEl = wrapper.vm.$el;
    expect(inputEl.querySelector('.imax__input--disabled')).to.be.ok;
  });

  it('prefix', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        prefixIcon: 'camera'
      }
    });
    const inputEl = wrapper.vm.$el;
    expect(inputEl.querySelector('.imax__input--prefix-inner')).to.be.ok;
    expect(inputEl.querySelector('.imax-icon-camera')).to.be.ok;
  });  


  it('suffix', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        suffixIcon: 'camera'
      }
    });
    const inputEl = wrapper.vm.$el;
    expect(inputEl.querySelector('.imax__input--suffix-inner')).to.be.ok;
    expect(inputEl.querySelector('.imax-icon-camera')).to.be.ok;
  }); 
});