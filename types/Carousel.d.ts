import Vue from 'vue';

export declare interface Carousel extends Vue {
  /** arrow show type */
  arrowShowType: 'always' | 'hover' | 'never';

  loop: boolean;

  autoplay: boolean;

  interval: number;
}
