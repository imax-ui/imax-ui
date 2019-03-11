<template>
  <div class="imax-slider">
    <div
      :style="{width: count + '%'}"
      class="imax-slider__bar" 
    />
    <div 
      ref="buttonWrapper"
      class="imax-slider__button-wrapper"
      :style="{left: count + '%'}"
    >
      <p class="imax-slider__button" />
      <div class="imax-slider__count">
        <p>{{ count }}</p>
      </div>
    </div>

    <div 
      v-if="showStops"
      class="imax-slider--show-stope"
    >
      <div 
        v-if="step > 1"
        class="imax-slider__steps"
      >
        <p 
          v-for="item in --step" 
          :key="item"
        >
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImSlider',
  data() {
    return {
      count: this.value >= 0 && this.value <= 100 ? this.value : 0
    }
  },
  props: {
    value: {
      type: [Number, Array],
      default: 0
    },
    range: Boolean,
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    disabled: Boolean,
    step: {
      type: Number,
      default: 1
    },
    showStops: Boolean,
    vertical: Boolean,
    height: String,
  },
  watch: {
    count(val) {
      this.$emit('input', Number(val))
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {

    },
  }
}
</script>