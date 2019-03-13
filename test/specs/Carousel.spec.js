import Carousel from 'packages/components/Carousel/src/carousel.vue';
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';

describe('Carousel', function() {
  it('create', () => {
    const wrapper = shallowMount(Carousel);
    const el = wrapper.vm.$el;
    expect(el.classList.contains('imax-Carousel')).to.be.true;
  });
});

