import Vue from 'vue';

export declare interface Form extends Vue {
  rules: object,

  model: object,

  disabled: boolean,

  labelWidth: string,

  showMessage?: boolean,

  inline?: boolean
}
