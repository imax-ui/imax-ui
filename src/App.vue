<template>
  <div id="app">
    <Button type="primary">
      按钮
    </Button>
    <Button type="error">
      按钮
    </Button>
    <Button type="info">
      按钮
    </Button>
    <Button type="success">
      按钮
    </Button>
    <Button>按钮</Button>
    <div class="group">
      <Icon
        type="icon-camera"
        color="#ccc"
        size="18px"
      />
    </div>
    <div class="group">
      <Row justify="space-around">
        <div>asd</div>
        <div>asd</div>
      </Row>
    </div>
    <div class="group">
      <Row>
        <Col
          :col="8"
          :offset="1"
        />
        asdsad
        </Col>
        <Col />asd</Col>
      </Row>
    </div>
    <div class="group">
      <ButtonGroup>
        <Button type="primary">
          按钮
        </Button>
        <Button type="error">
          按钮
        </Button>
        <Button type="success">
          按钮
        </Button>
      </ButtonGroup>
    </div>
    <div class="group">
      <Input
        :value="inputModel"
        prefix-icon="search"
        suffix-icon="time_fill"
      />
    </div>
    <div class="group">
      <Textarea />
    </div>
    <div class="group">
      <Radio
        v-model="radioModel"
        label="测试label1"
      />
      <Radio
        v-model="radioModel"
        label="测试label2"
      />
    </div>
    <div class="group">
      <Checkbox v-model="checkBoxModel">
        checked
      </Checkbox>
    </div>
    <div class="group">
      <Select v-model="selectModel">
        <Option
          value="opt1"
          label="opt1"
        />
        <Option
          value="opt2"
          label="opt2"
        />  
      </Select>
    </div>
    <div class="group">
      <Button
        type="warn"
        @click="testMessage"
      >
        测试message
      </Button>
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
    testMessage() {
      this.$message({
        type: 'error',
        message: 'test'
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

