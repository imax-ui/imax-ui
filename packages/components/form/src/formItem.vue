<template>
  <div
    class="imax-form-item"
    :class="[{
      'is-validating': validateState === 'validating',
      'is-success': validateState === 'success',
      'is-error': validateState === 'error',
      'is-required': isRequired
    }]"
  >
    <label
      v-if="label || $slots.label"
      class="imax-form-item__label"
      :for="labelFor"
      :style="labelStyle"
    >
      <slot name="label">{{ label }}</slot>
    </label>
    <div
      class="imax-form-item__content"
      :style="contentStyle"
    >
      <slot />
      <transition name="zoom-in-top">
        <div
          v-if="validateState === 'error' && showMessage && imForm.showMessage"
          class="imax-form-item__error"
        >
          {{ validateMessage }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator';
import Emitter from 'packages/mixins/emitter';

export default {
  name: 'ImFormItem',

  provide() {
    return {
      imFormItem: this
    };
  },

  inject: ['imForm'],

  mixins: [Emitter],

  props: {
    label: {
      type: String,
      default: ''
    },
    labelWidth: String,
    for: String,
    prop: String,
    error: String,
    rules: [Array, Object],
    validateStatus: String,
    showMessage: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      validateMessage: '',
      validateState: ''
    };
  },

  computed: {
    labelFor() {
      return this.for || this.prop;
    },
    labelStyle() {
      const ret = {};
      const labelWidth = this.labelWidth || (this.imForm || {}).labelWidth;

      if (labelWidth) {
        ret.width = labelWidth;
      }

      return ret;
    },
    contentStyle() {
      const ret = {};

      const labelWidth = this.labelWidth || (this.imForm || {}).labelWidth;

      if (labelWidth) {
        ret.marginLeft = labelWidth;
      }

      return ret;
    },

    isRequired() {
      const rules = this.getRules();

      return rules.some(rule => rule.required);
    },

    fieldValue: {
      cache: false,
      get() {
        const model = (this.imForm || {}).model;

        if (!model || !this.prop) return;

        return model[this.prop];
      }
    }
  },

  watch: {
    error: {
      immediate: true,
      handler(value) {
        this.validateMessage = value;
        this.validateState = value ? 'error' : '';
      }
    },
    validateStatus(state) {
      this.validateState = state;
    }
  },

  mounted() {
    if (this.prop) {
      this.dispatch('ImForm', 'im-form.addField', this);

      Object.defineProperty(this, 'initValue', {
        value: this.fieldValue
      });

      let rules = this.getRules();

      if (rules && rules.length) {
        this.$on('im-form.change', this.onFieldChange);
        this.$on('im-form.blur', this.onFieldBlur);
      }
    }
  },

  destroyed() {
    this.dispatch('ImForm', 'im-form.removeField', this);
  },

  methods: {
    validate(trigger) {
      return new Promise(resolve => {
        const rules = this.getFilteredRules(trigger);

        if (!rules.length) return resolve({
          message: '',
          invalidField: {}
        });

        const prop = this.prop || '';
        const descriptor = {};
        rules.forEach(rule => {
          delete rule.trigger;
        });
        descriptor[prop] = rules;
        const validator = new AsyncValidator(descriptor);
        const model = {};
        model[prop] = this.fieldValue;

        validator.validate(model, { firstFields: true }, (errors, field) => {
          if (!errors) {
            this.validateState = 'success';
            this.validateMessage = '';
          } else {
            this.validateState = 'error';
            this.validateMessage = errors[0].message;
          }

          resolve({
            message: this.validateMessage,
            field
          });
          this.imForm && this.imForm.$emit('validate', this.prop, !errors);
        });
      });
    },
    clearField() {
      this.validateMessage = '';
      this.validateState = '';
    },
    resetField() {
      const prop = this.prop;
      const model = (this.imForm || {}).model || {};

      this.validateMessage = '';
      this.validateState = '';

      if (Array.isArray(this.fieldValue)) {
        model[prop] = [].concat(this.initValue);
      } else {
        model[prop] = this.initValue;
      }
    },
    getRules() {
      const prop = this.prop || '';
      const selfRules = this.rules;
      const requiredRule = this.required ? { required: !!this.required } : [];
      let formRules = (this.imForm || {}).rules || {};

      formRules = formRules[prop] || [];

      return [].concat(selfRules || formRules).concat(requiredRule);
    },
    getFilteredRules(trigger) {
      const rules = this.getRules();

      return rules.filter(rule => {
        if (!rule.trigger || trigger === '') return true;

        return trigger === rule.trigger;
      }).map(rule => ({ ...rule }));
    },
    onFieldChange() {
      this.validate('change');
    },
    onFieldBlur() {
      this.validate('blur');
    }
  }
};
</script>
