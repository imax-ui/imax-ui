<template>
  <div 
    :class="vertical && 'imax-slider--vertical'"
    class="imax-slider" 
  >
    <div 
      ref="sliderContent" 
      :class="disabled && 'imax-slider__disabled'"
      :style="height && vertical && {height}"
      class="imax-slider__content"
    >
      <div
        :style="vertical ? {height: count + '%'} : {width: count + '%'}"
        class="imax-slider__bar" 
      />
      <div 
        ref="buttonWrapper"
        class="imax-slider__button-wrapper"
        :style="vertical ? {top: count + '%'} : {left: count + '%'}"
      >
        <p class="imax-slider__button" />

        <div 
          v-if="showTooltip"
          :style="[
            countOpacityStyle && { opacity: 1 },
            {padding: `0 ${formatCountPadding}`}
          ]"
          class="imax-slider__count"
        >
          <p>{{ formatCount }}</p>
        </div>
      </div>

      <div 
        v-if="showStops"
        class="imax-slider--show-stope"
      >
        <div 
          class="imax-slider__steps"
        >
          <p 
            v-for="(item, i) in stopsList" 
            :key="item"
            :style="{left: step * (i + 1) + '%'}"
          />
        </div>
      </div>
    </div>

    <div class="imax-slider__show-input">
      <div class="imax-slider__show-input-content">
        <span 
          :class="formatCount <= 0 && 'imax-slider--disabled-button'"
          class="imax-slider__dec-button"
          @click="changeCount(0)"
        >
          -
        </span>
        <div 
          class="imax-slider__input-wrapper"
          @click="$refs.sliderInput.focus()"
        >
          <input
            ref="sliderInput"
            v-model="formatCount"
            class="imax-slider__input"
            maxlength="3" 
            type="text"
          >
        </div>
        <span 
          :class="formatCount >= 100 && 'imax-slider--disabled-button'"
          class="imax-slider__inc-button"
          @click="changeCount(1)"
        >
          +
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImSlider',
  filters: {
    filterCount(val) {
      return Math.round(val)
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
    showTooltip: {
      type: Boolean,
      default: true
    },
    formatTooltip: Function,
    vertical: Boolean,
    height: String
  },
  data() {
    return {
      count: this.value >= 0 && this.value <= 100 ? this.value : 0,
      countOpacityStyle: ''
    }
  },
  computed: {
    formatCount: {
      get() {
        const val = Math.round(this.count)
        if(typeof this.formatTooltip === 'function') return this.formatTooltip(val)
        return val
      },
      set(val) {
        if(!Number(val)) return
        this.count = val >= 100 ? 100 : 
          val <= 0 ? 0 :val
      }
    },
    formatCountPadding() {
      return this.formatCount.toString().length + 'px'
    },
    stopsList() {
      return new Array(~~(100 / this.step) - (100 % this.step ? 0 : 1))
    }
  },
  watch: {
    count(val) {
      this.$emit('input', Number(val))
    }
  },
  mounted() {
    if(this.disabled) return
    this.init()
  },
  methods: {
    init() {
      const { buttonWrapper, sliderContent } = this.$refs
      const { step, vertical } = this
      const getCount = (client, start) => (client - start) / (vertical ? sliderContent.offsetHeight : sliderContent.offsetWidth) * 100
      let isMove, startX, startY, saveCount = 0

      buttonWrapper.onmousedown = (e) => {
        isMove = true
        startX = e.clientX
        startY = e.clientY

        window.onmousemove = (e) => {
          if(!isMove) return
          const X = e.clientX
          const Y = e.clientY
          let count = getCount(X, startX)

          if(vertical) count = getCount(startY, Y)

          saveCount += count

          this.countOpacityStyle = true

          if(this.count <= 0 && count <= 0) return this.count = 0
          if(this.count >= 100 && count >= 0) return this.count = 100

          if(step > 1) {
            if(saveCount >= step / 2) {
              count = step
              saveCount = 0
            } else 
              count = 0
          }


          this.count += count
          startX = X
          startY = Y
        }
        window.onmouseup = () => {
          this.countOpacityStyle = false
          isMove = false
          window.onmousemove = null
        }
      }
    },
    changeCount(id) {
      const { count } = this
      let num = 0
      if(id) {
        if(count == 100) return
        num = 1
      }else {
        if(count == 0) return
        num = -1
      }
      this.count += num
    }
  }
}
</script>