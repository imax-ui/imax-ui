import slider from 'packages/components/slider/src/slider.vue';
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';

describe('slider', function() {
  it('create', () => {
    const wrapper = shallowMount(slider);
    const el = wrapper.vm.$el;
    expect(el.classList.contains('imax-slider')).to.be.true;
  });
});

