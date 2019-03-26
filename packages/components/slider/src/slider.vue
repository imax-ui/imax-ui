<template>
  <div 
    :class="vertical && 'imax-slider--vertical'"
    class="imax-slider" 
  >
    <div 
      ref="sliderContent" 
      :class="disabled && 'imax-slider__disabled'"
      :style="vertical && height && {height}"
      class="imax-slider__content"
      @click="jumpCount"
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
        <div class="imax-slider__button" />

        <div 
          v-if="showTooltip"
          :style="[
            countOpacityStyle && { opacity: 1 },
            {padding: `0 ${formatCountPadding}`}
          ]"
          class="imax-slider__count"
          :class="tooltipClass"
        >
          <p>{{ formatCount }}</p>
        </div>
      </div>

      <div 
        v-if="showStops && step > 1"
        class="imax-slider--show-stope"
      >
        <div 
          class="imax-slider__steps"
        >
          <p 
            v-for="(item, i) in stopsList" 
            :key="item"
            :style="vertical 
              ? {top: step * (i + 1) + '%', transform: 'translateY(-50%)'} 
              : {left: step * (i + 1) + '%'}"
          />
        </div>
      </div>
    </div>

    <div 
      v-if="showInput"
      class="imax-slider__show-input"
      :class="inputSizeClass"
    >
      <div 
        :class="showInputControls && 'imax-slider--has-controls'"
        class="imax-slider__show-input-content" 
      >
        <span 
          v-if="showInputControls"
          :class="formatCount <= 0 && 'imax-slider--disabled-button'"
          class="imax-slider__dec-button"
          @click="changeCount(0)"
        >
          -
        </span>
        <div 
          :class="!showInputControls && 'imax-slider--input-no-controls'"
          class="imax-slider__input-wrapper"
          @click="$refs.sliderInput.focus()"
        >
          <input
            ref="sliderInput"
            v-model="formatCount"
            class="imax-slider__input"
            maxlength="3" 
            type="tel"
          >
        </div>
        <span 
          v-if="showInputControls"
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
    showInput: Boolean,
    showInputControls: {
      type: Boolean,
      default: true
    },
    formatTooltip: Function,
    vertical: Boolean,
    height: String,
    inputSize: {
      type: String,
      default: 'small'
    },
    tooltipClass: String
  },
  data() {
    return {
      saveValue: this.value, 
      countOpacityStyle: ''
    };
  },
  computed: {
    count: {
      get() {
        return this.saveValue >= 0 && this.saveValue <= 100 ? this.saveValue : 0;
      },
      set(val) {
        this.saveValue = val;
      }
    },
    formatCount: {
      get() {
        const val = Math.round(this.count);
        if(typeof this.formatTooltip === 'function') return this.formatTooltip(val);
        return val;
      },
      set(val) {
        if(!Number(val)) return;
        this.count = val >= 100 ? 100 : 
          val <= 0 ? 0 : val;
      }
    },
    formatCountPadding() {
      return this.formatCount.toString().length + 'px';
    },
    stopsList() {
      return new Array(~~(100 / this.step) - (100 % this.step ? 0 : 1));
    },
    inputSizeClass() {
      let className = 'imax-slider--input-',
        name = '';
      switch (this.inputSize) {
      case 'large':
        name = 'large';
        break;
      case 'medium':
        name = 'medium';
        break;
      case 'small':
        className = '';
        break;
      case 'mini': 
        name = 'mini';
        break;
      }
      return className + name;
    }
  },
  watch: {
    count(val) {
      this.$emit('change', Number(val));
      this.$emit('input', Number(val));
    },
    value(val) {
      this.count = val;
    }
  },
  mounted() {
    if(this.disabled) return;
    this.init();
  },
  methods: {
    init() {
      const { buttonWrapper, sliderContent } = this.$refs;
      const { step, vertical } = this;
      const getCount = (client, start) => (client - start) / (vertical ? sliderContent.offsetHeight : sliderContent.offsetWidth) * 100;
      let isMove, startX, startY, saveCount = 0;

      buttonWrapper.onclick = (e) => {
        e.stopPropagation();
      };

      buttonWrapper.onmousedown = (e) => {
        isMove = true;
        startX = e.clientX;
        startY = e.clientY;
      };

      window.addEventListener('mousemove', (e) => {
        if(!isMove) return;
        const X = e.clientX;
        const Y = e.clientY;
        let count = getCount(X, startX);

        if(vertical) count = getCount(startY, Y);

        this.countOpacityStyle = true;

        if(this.count <= 0 && count <= 0) return this.count = 0;
        if(this.count >= 100 && count >= 0) return this.count = 100;

        saveCount += count;

        if(step > 1) {
          if(saveCount >= this.count + step / 2 && count > 0) {
            if(100 % step !== 0 && this.count == 100 - 100 % step) return;
            count = step;
          } else if(saveCount <= this.count - step / 2 && count < 0) {
            count = -step;
          } else {
            count = 0;
          }
        }

        this.count += count;
        startX = X;
        startY = Y;
      });

      window.addEventListener('mouseup', () => {
        this.countOpacityStyle = false;
        isMove = false;
      });
    },
    changeCount(id) {
      const { count, step } = this;
      let num = 0;
      if(id) {
        if(count == 100 || count == 100 - 100 % step) return;
        num = step > 1 ? step : 1;
      } else {
        if(count == 0) return;
        num = step > 1 ? -step : -1;
      }
      this.count += num;
    },
    jumpCount(e) {
      const { step, vertical } = this;
      const { sliderContent } = this.$refs;
      let count = (e.pageX - sliderContent.offsetLeft) / sliderContent.offsetWidth * 100;
      if(vertical) count = 100 - (e.pageY - sliderContent.offsetTop) / sliderContent.offsetHeight * 100;
      if(step > 1) count = Math.round(count / step) * step;
      this.count = count;
    }
  }
};
</script>