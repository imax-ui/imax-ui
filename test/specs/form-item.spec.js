import FormItem from 'packages/components/form-item/src/formItem.vue';
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';

describe('FormItem', function() {
  it('create', () => {
    const wrapper = shallowMount(FormItem);
    const el = wrapper.vm.$el;
    expect(el.classList.contains('imax-formItem')).to.be.true;
  });
});
