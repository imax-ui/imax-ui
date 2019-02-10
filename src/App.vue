<template>
  <div id="app">
    <i-button type="primary">按钮</i-button>
    <i-button type="danger">按钮</i-button>
    <i-button type="info">按钮</i-button>
    <i-button type="success">按钮</i-button>
    <i-button>按钮</i-button>
    <div class="group">
      <i-icon type="camera" color="#ccc" size="18px"/>
    </div>
    <div class="group">
      <i-row justify="space-around">
        <div>asd</div>
        <div>asd</div>
      </i-row>
    </div>
    <div class="group">
      <i-row>
        <i-col :col="8" :offset="1">
          asdsad
        </i-col>
      </i-row>
    </div>
    <div class="group">
      <i-button-group>
        <i-button type="primary">按钮</i-button>
        <i-button type="danger">按钮</i-button>
        <i-button type="success">按钮</i-button>
      </i-button-group>
    </div>
    <div class="group">
      <i-input :value="inputModel" prefix-icon="camera" suffix-icon="camera" />
    </div>
    <div class="group">
      <i-textarea />
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      inputModel: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.group {
  margin: 20px 0;
}
</style>

