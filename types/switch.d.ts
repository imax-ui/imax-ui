import Vue from 'vue';

export declare interface Switch extends Vue {
  name: String,
  value: Number | String | Boolean,
  disabled: Boolean,
  activeValue: Number | String | Boolean,
  inactiveValue: Number | String | Boolean
}

