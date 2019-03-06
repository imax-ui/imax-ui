import Slider from 'packages/components/Slider/src/slider.vue';
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';

describe('Slider', function() {
  it('create', () => {
    const wrapper = shallowMount(Slider);
    const el = wrapper.vm.$el;
    expect(el.classList.contains('imax-Slider')).to.be.true;
  });
});

