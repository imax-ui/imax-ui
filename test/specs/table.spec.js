import Table from 'packages/components/table/src/table.vue';
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';

describe('Table', function() {
  it('create', () => {
    const wrapper = shallowMount(Table);
    const el = wrapper.vm.$el;
    expect(el.classList.contains('imax-table')).to.be.true;
  });
});

