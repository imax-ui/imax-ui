import Switch from 'packages/components/switch/src/switch.vue';
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';

describe('Switch', function() {
  it('create', () => {
    const wrapper = shallowMount(Switch);
    const el = wrapper.vm.$el;
    expect(el.classList.contains('imax-switch')).to.be.true;
  });
});

