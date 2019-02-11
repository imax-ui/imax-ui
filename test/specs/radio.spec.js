import Radio from 'packages/components/radio/radio.vue';
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

describe('Radio', function() {
  it('input', () => {
    const wrapper = shallowMount(Radio, {
      propsData: {
        label: 'test input'
      }
    });
    wrapper.vm.$emit('input')
  });

  it('change', () => {
    const wrapper = shallowMount(Radio, {
      propsData: {
        label: 'test input'
      }
    });
    wrapper.vm.$emit('change')
  });
});