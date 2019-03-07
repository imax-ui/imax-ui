import Col from 'packages/components/col/col.vue';
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

describe('Col', function() {
  it('tag', () => {
    const wrapper = shallowMount(Col, {
      propsData: {
        tag: 'p'
      }
    });
    const colEl = wrapper.vm.$el;
    expect(colEl.tagName === 'P').to.be.true;
  });

  it('col', () => {
    const wrapper = shallowMount(Col, {
      propsData: {
        col: 20
      }
    });
    const colEl = wrapper.vm.$el;
    expect(colEl.classList.contains(`imax-col-20`)).to.be.true;
  });

  it('offset', () => {
    const wrapper = shallowMount(Col, {
      propsData: {
        offset: 20
      }
    });
    const colEl = wrapper.vm.$el;
    expect(colEl.classList.contains( `imax-col-offset-20`)).to.be.true;
  });
});