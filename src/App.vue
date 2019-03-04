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
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      inputModel: '',
      radioModel: '',
      checkBoxModel: false,
      selectModel: ''
    }
  },
  methods: {
    testAlert() {
      this.$Alert({
        message: 'test',
        title: 'test'
      });
    },
    testMessage() {
      this.$Message({
        message: 'test',
        title: 'test'
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

