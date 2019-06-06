# Layout 布局
将页面简单分成24份，快速创建布局


### 基本的Layout布局

<demo>
  <template>
    <im-row>
      <im-col class="demo-col" :col="24">
        <div>24</div>
      </im-col>
    </im-row>
    <im-row>
      <im-col class="demo-col" :col="12">
        <div>12</div>
      </im-col>
      <im-col class="demo-col" :col="12">
        <div>12</div>
      </im-col>
    </im-row>
    <im-row>
      <im-col class="demo-col" :col="6">
        <div>6</div>
      </im-col>
      <im-col class="demo-col" :col="6">
        <div>6</div>
      </im-col>
      <im-col class="demo-col" :col="6">
        <div>6</div>
      </im-col>
      <im-col class="demo-col" :col="6">
        <div>6</div>
      </im-col>
    </im-row>
    <im-row>
      <im-col class="demo-col" :col="4">
        <div>4</div>
      </im-col>
      <im-col class="demo-col" :col="20">
        <div>20</div>
      </im-col>
    </im-row>
  </template>     
  <template v-slot:code>

```vue
  <template>
    <im-row>
      <im-col class="demo-col" :col="24">
        <div>24</div>
      </im-col>
    </im-row>
    <im-row>
      <im-col class="demo-col" :col="12">
        <div>12</div>
      </im-col>
      <im-col class="demo-col" :col="12">
        <div>12</div>
      </im-col>
    </im-row>
    <im-row>
      <im-col class="demo-col" :col="6">
        <div>6</div>
      </im-col>
      <im-col class="demo-col" :col="6">
        <div>6</div>
      </im-col>
      <im-col class="demo-col" :col="6">
        <div>6</div>
      </im-col>
      <im-col class="demo-col" :col="6">
        <div>6</div>
      </im-col>
    </im-row>
    <im-row>
      <im-col class="demo-col" :col="4">
        <div>4</div>
      </im-col>
      <im-col class="demo-col" :col="20">
        <div>20</div>
      </im-col>
    </im-row>
  </template> 
  
```
  </template>
</demo>  

### 参数说明

#### row参数
<im-table 
  stripe
  class="table"
  :columns="[{title: '参数', key: 'title'}, {title: '说明', key: 'about'}, {title: '类型', key: 'type'}, {title: '可选择', key: 'val'}, {title: '默认值', key: 'default'}]"
  :data="[{
    title: 'tag',
    about: '标签',
    type: 'string',
    val: '-',
    default: 'div'
  },{
    title: 'justify',
    about: '水平排列方式',
    type: 'string',
    val: 'center, end, space-between, space-around',
    default: 'center'
  },{
    title: 'align',
    about: '垂直排列方式',
    type: 'string',
    val: 'end, center, baseline, stretch',
    default: 'center'
  },{
    title: 'gutter',
    about: '栅格间隔',
    type: 'number',
    val: '-',
    default: '-'
  }]">
</im-table>

### col参数
<im-table 
  stripe
  class="table"
  :columns="[{title: '参数', key: 'title'}, {title: '说明', key: 'about'}, {title: '类型', key: 'type'}, {title: '可选择', key: 'val'}, {title: '默认值', key: 'default'}]"
  :data="[{
    title: 'tag',
    about: '标签',
    type: 'string',
    val: '-',
    default: 'div'
  },{
    title: 'col',
    about: '栅格占据的列数',
    type: 'number',
    val: '-',
    default: '24'
  },{
    title: 'offset',
    about: '栅格左侧的间隔格数',
    type: 'number',
    val: '-',
    default: '-' 
  }]">
</im-table>

<style lang="sass" scoped>
  pre
    padding: 0 !important;
    margin: 0 !important;

  .table
    width: 100%;

  .demo-col
    padding: 4px;
  .demo-col > div
    color: #fff;
    padding: 8px;
    border-radius: 3px;
    text-align: center;
    background-color: #999;
</style>