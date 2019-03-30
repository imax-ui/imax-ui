import Form from 'packages/components/form/src/form.vue';
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';

describe('Form', function() {
  it('create', () => {
    const wrapper = shallowMount(Form);
    const el = wrapper.vm.$el;
    expect(el.classList.contains('imax-form')).to.be.true;
  });
});
