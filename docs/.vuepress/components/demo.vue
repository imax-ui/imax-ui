<template>
  <div class="demo-box">
    <div class="demo">
      <slot></slot>
    </div>
    <div class="line"></div>
    <transition name="zoom-in-top">
      <pre :class="['expand']" v-if="showCode">
        <slot name="code"></slot>
      </pre>
    </transition>
    <div class="expand-button" @click="toggle">{{btnText}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCode: false,
      btnText: '展开代码',
    };
  },
  methods: {
    toggle() {
      this.showCode = !this.showCode;
      this.btnText = this.btnText === '展开代码' ? '收起代码' : '展开代码';
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-box {
  border: 1px solid rgba(146, 146, 146, 0.1);
  border-radius: 8px;
  margin-bottom: 20px;
  margin-top: 20px;
  position: relative;
  transition: all 0.2s ease-in-out;

  .demo {
    padding: 30px 30px 35px;
    position: relative;
  }

  &:hover {
    box-shadow: 0 2px 18px rgba(0,0,0,.1);
    border-color: rgba(0,0,0,0);
    position: relative;
  }
}

.demo-box > pre.expand {
  max-height: 10000px;
  overflow-x: auto;
  margin-bottom: 35px;
  padding: 0;
  border-radius: 0;
  margin: 0;
}

.demo-box > .expand-button {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background-color: #fff;
  transition: color 0.2s;
  color: #3faaf5;
  cursor: pointer;
}

.zoom-in-top-enter-active,
.zoom-in-top-leave-active {
  opacity: 1;
  transform: scaleY(1);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: center top 0;
}

.zoom-in-top-enter,
.zoom-in-top-leave-active {
  opacity: 0;
  transform: scaleY(0);
}

</style>

