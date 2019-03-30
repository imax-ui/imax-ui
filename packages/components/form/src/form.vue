<template>
  <form
    class="imax-form"
    :class="[{
      'imax-form--inline': inline
    }]"
  >
    <slot />
  </form>
</template>

<script>
export default {
  name: 'ImForm',

  provide() {
    return {
      imForm: this
    };
  },

  props: {
    rules: Object,
    model: Object,
    disabled: Boolean,
    labelWidth: String,
    showMessage: {
      type: Boolean,
      default: true
    },
    inline: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      fields: []
    };
  },

  watch: {
    rules() {
      this.validate(() => {});
    }
  },

  created() {
    this.$on('im-form.addField', field => {
      if (field) {
        this.fields.push(field);
      }
    });

    this.$on('im-form.removeField', field => {
      if (field.prop) {
        this.fields.splice(this.fields.indexOf(field), 1);
      }
    });
  },

  methods: {
    validate(trigger) {
      return new Promise(resolve => {
        if (this.fields.length === 0) return resolve({
          valid: true,
          invalidFields: {}
        });

        Promise.all(
          this.fields.map(
            field => field.validate(trigger)
          )
        ).then(results => {
          let valid = true;
          let invalidFields = {};

          results.forEach(({ message, field }) => {
            if (message) {
              valid = false;
            }

            invalidFields = { ...invalidFields, ...field };
          });

          resolve({ valid, invalidFields });
        });
      });
    },
    validateField(prop) {
      const field = this.fields.filter(field => field.prop === prop)[0];

      if (!field) return;

      return field.validate('');
    },
    resetFields() {
      this.fields.forEach(field => {
        field.resetField();
      });
    },
    clearFields() {
      this.fields.forEach(field => {
        field.clearField();
      });
    }
  }
};
</script>
