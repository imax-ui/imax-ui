import Vue from 'vue';

export declare interface Switch extends Vue {
  name: string,

  value: number | string | boolean,

  disabled: boolean,

  activeValue?: number | string | boolean,

  inactiveValue?: number | string | boolean
}
