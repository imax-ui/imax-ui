import Icon from 'packages/components/icon/icon.vue';
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

describe('Icon', function() {
  it('type', () => {
    const wrapper = shallowMount(Icon, {
      propsData: {
        type: 'camera'
      }
    });
    const iconEl = wrapper.vm.$el;
    expect(iconEl.classList.contains('imax-icon-camera')).to.be.true;
  });

  it('fontsize', () => {
    const wrapper = shallowMount(Icon, {
      propsData: {
        size: 14
      }
    });
    const iconEl = wrapper.vm.$el;
    expect(iconEl.style.fontSize === '14px').to.be.true;
  });

  it('color', () => {
    const wrapper = shallowMount(Icon, {
      propsData: {
        color: 'rgb(204, 204, 204)'
      }
    });
    const iconEl = wrapper.vm.$el;
    expect(iconEl.style.color === 'rgb(204, 204, 204)').to.be.true;
  });
});