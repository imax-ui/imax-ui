import Vue from 'vue';

export declare interface FormItem extends Vue {
  label?: string,

  labelWidth: string,

  for: string,

  prop: string,

  error: string,

  rules: Array<any> | object,

  validateStatus: string,

  showMessage?: boolean,

  required?: boolean
}
