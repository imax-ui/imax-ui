# Icon 图标
`imax-ui`为开发者准备了多个内置的icon

### 使用
使用简单的`<im-icon type="类型"></im-icon>`进行调用

<demo>
  <template>
    <im-icon class="demo-icon" type="success"></im-icon>
    <im-icon class="demo-icon" type="error"></im-icon>
    <im-icon class="demo-icon" type="warning"></im-icon>
  </template>     
  <template v-slot:code>

```vue
  <template>
    <im-icon class="demo-icon" type="success"></im-icon>
    <im-icon class="demo-icon" type="error"></im-icon>
    <im-icon class="demo-icon" type="warning"></im-icon>
  </template>

```
  </template>
</demo>

### 图标库

<style lang="sass" scoped>
  pre
    padding: 0 !important;
    margin: 0 !important;

  .demo-icon
    font-size: 28px !important;
</style>