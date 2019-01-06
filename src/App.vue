<template>
  <div id="app">
    <iButton type="primary" :circle="true" icon="imax-icon-camera" :long="true" :disabled="true">按钮</iButton>
    <iButton type="danger">按钮</iButton>
    <iButton type="info" size="mini">按钮</iButton>
    <iButton type="warning" size="large" :circle="true">按钮</iButton>
    <iButton type="success" size="small" :circle="true">按钮</iButton>
    <div>
      <icon type="camera" color="#ccc" size="18px"/>
    </div>
    <div>
      <iRow justify="space-around">
        <div>asd</div>
        <div>asd</div>
      </iRow>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>
