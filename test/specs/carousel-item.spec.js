import CarouselItem from 'packages/components/CarouselItem/src/carouselItem.vue';
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';

describe('CarouselItem', function() {
  it('create', () => {
    const wrapper = shallowMount(CarouselItem);
    const el = wrapper.vm.$el;
    expect(el.classList.contains('imax-CarouselItem')).to.be.true;
  });
});

