import Row from 'packages/components/row/row.vue';
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

describe('Row', function() {
  it('tag', () => {
    const wrapper = shallowMount(Row, {
      propsData: {
        tag: 'p'
      }
    });
    const rowEl = wrapper.vm.$el;
    expect(rowEl.tagName === 'P').to.be.true;
  });

  it('justify', () => {
    const wrapper = shallowMount(Row, {
      propsData: {
        justify: 'end'
      }
    });
    const rowEl = wrapper.vm.$el;
    expect(rowEl.classList.contains(`imax__row--justify-end`)).to.be.true;
  });

  it('align', () => {
    const wrapper = shallowMount(Row, {
      propsData: {
        align: 'center'
      }
    });
    const rowEl = wrapper.vm.$el;
    expect(rowEl.classList.contains(`imax__row--align-center`)).to.be.true;
  });

  it('gutter', () => {
    const wrapper = shallowMount(Row, {
      propsData: {
        gutter: 20
      }
    });
    const rowEl = wrapper.vm.$el;
    expect(rowEl.style.marginLeft).to.be.equal('-10px');
    expect(rowEl.style.marginRight).to.be.equal('-10px');
  });
});