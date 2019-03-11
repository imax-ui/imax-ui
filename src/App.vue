<template>
  <div id="app">
    <div class="group">
      <im-button
        type="warn"
        @click="testAlert"
      >
        测试alert
      </im-button>
    </div>
    <div class="group">
      <im-button
        type="warn"
        @click="testMessage"
      >
        测试message
      </im-button>
    </div>

    <div class="group">
      <p>{{ switchValue }}</p>
      <im-switch
        v-model="switchValue"
        active-value="active"
        inactive-value="inactive"
        @change="handleSwitchChange"
      />
      <im-switch
        v-model="switchValue"
        disabled
        active-value="active"
        inactive-value="inactive"
      />
    </div>

    <div class="group" style="margin-top: 100px;">
      <im-slider v-model="sliderValue"></im-slider>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      switchValue: 'active',
      inputModel: '',
      radioModel: '',
      checkBoxModel: false,
      selectModel: '',
      sliderValue: 10
    }
  },
  methods: {
    testAlert() {
      this.$Alert({
        message: 'test',
        title: 'test',
        onClose: () => { console.log('close') }
      });
    },
    testMessage() {
      this.$Message({
        message: 'test',
        title: 'test'
      });
    },
    handleSwitchChange() {
      this.$Alert({
        message: this.switchValue
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.group {
  margin: 20px 0;
}
</style>

