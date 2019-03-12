<template>
  <div class="imax-slider" ref="slider">
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
      <div 
        :style="countOpacityStyle && { opacity: 1 }"
        class="imax-slider__count"
      >
        <p>{{ count | filterCount }}</p>
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
      count: this.value >= 0 && this.value <= 100 ? this.value : 0,
      countOpacityStyle: ''
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
  filters: {
    filterCount(val) {
      return Math.round(val)
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const { buttonWrapper, slider } = this.$refs
      let isMove, startX = 0

      buttonWrapper.onmousedown = (e) => {
        isMove = true
        startX = e.clientX

        window.onmousemove = (e) => {
          if(!isMove) return
          this.countOpacityStyle = true

          const count = (e.clientX - startX) / slider.offsetWidth

          if(this.count <= 0 && count <= 0) return this.count = 0
          if(this.count >= 100 && count >= 0) return this.count = 100

          this.count += count * 100
          startX = e.clientX
        }
        window.onmouseup = () => {
          this.countOpacityStyle = false
          isMove = false
          window.onmousemove = null
        }
      }
    },
  }
}
</script>