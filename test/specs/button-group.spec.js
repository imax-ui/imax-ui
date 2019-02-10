import ButtonGroup from 'packages/components/button-group/buttonGroup.vue';
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

describe('ButtonGroup', function() {
  it('create', () => {
    const wrapper = shallowMount(ButtonGroup);
    const buttonGroupEl = wrapper.vm.$el;
    expect(buttonGroupEl.classList.contains('imax__button--group')).to.be.true;
  });
});