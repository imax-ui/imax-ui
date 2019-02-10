import Textarea from 'packages/components/textarea/textarea.vue';
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

describe('Textarea', function() {
  it('disabled', () => {
    const wrapper = shallowMount(Textarea, {
      propsData: {
        disabled: true
      }
    });
    const inputEl = wrapper.vm.$el;
    expect(inputEl.querySelector('.imax__textarea--disabled')).to.be.ok;
  });
});