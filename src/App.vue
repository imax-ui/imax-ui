<template>
  <div id="app">
    <iButton type="primary">按钮</iButton>
    <iButton type="danger">按钮</iButton>
    <iButton type="info">按钮</iButton>
    <iButton type="success">按钮</iButton>
    <iButton>按钮</iButton>
    <div>
      <icon type="camera" color="#ccc" size="18px"/>
    </div>
    <div>
      <iRow justify="space-around">
        <div>asd</div>
        <div>asd</div>
      </iRow>
    </div>
    <div>
      <i-row>
        <i-col :col="8" :offset="1">
          asdsad
        </i-col>
      </i-row>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>
