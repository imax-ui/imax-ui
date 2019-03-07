import Confirm from 'packages/components/confirm/src/confirm.vue';
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';

describe('Confirm', function() {
  it('create', () => {
    const wrapper = shallowMount(Confirm);
    const el = wrapper.vm.$el;
    expect(el.classList.contains('imax-confirm')).to.be.true;
  });
});

