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

    <div class="group">
      <im-button
        type="warn"
        @click="testConfirm"
      >
        testConfirm
      </im-button>
    </div>

    <div
      class="group"
      style="margin-top: 100px;"
    >
      <im-slider
        v-model="sliderValue"
        vertical
        height="300px"
      />
      <div
        class="group"
        style="margin-top: 100px;"
      >
        <im-slider
          v-model="sliderValue"
          show-input
          show-stops
          :step="16"
        />
      </div>
    
      <div class="group carousel-div">
        <im-carousel
          arrow-show-type="hover"
          loop
          autoplay
        >
          <im-carousel-item />
          <im-carousel-item />
          <im-carousel-item />
        </im-carousel>
      </div>
    
      <div class="group">
        <im-table
          ref="multipleTable"
          :columns="columns1"
          :data="data1"
          checkbox
          stripe
        >
          <template
            slot="action"
            slot-scope="{ row, index }"
          >
            <im-button
              type="warn"
              @click="testAction(row, index)"
            >
              testAction
            </im-button>
          </template>
        </im-table>
      </div>

      <div class="group">
        <im-button
          type="success"
          @click="getTableData"
        >
          getTableData
        </im-button>
      </div>

      <div class="group">
        <div
          v-loading="testLoading"
          class="loading-box"
        />
      </div>

      <div class="group">
        <im-switch
          v-model="testLoading"
          :active-value="true"
          :inactive-value="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      testLoading: true,
      switchValue: 'active',
      inputModel: '',
      radioModel: '',
      checkBoxModel: false,
      selectModel: '',
      columns1: [
        {
          title: 'Name',
          key: 'name',
          width: 100
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'Birthday',
          key: 'birthday',
          render: (h, { row }) => {
            const date = new Date(parseInt(row.birthday));
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const birthday = `${year}-${month}-${day}`;
            return h('span', birthday);
          }
        },
        {
          title: 'Action',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          birthday: 123123123123
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          birthday: 12312312312
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          birthday: 324234234
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          birthday: 23423432423
        }
      ],
      sliderValue: 0
    };
  },
  methods: {
    testAlert() {
      this.$Alert({
        message: 'test',
        title: 'test',
        onClose: () => { console.log('close'); }
      });
    },
    testMessage() {
      this.$Message({
        message: 'test',
        title: 'test'
      });
    },
    testConfirm() {
      this.$Confirm({
        message: 'test',
        title: 'test',
        onConfirm: () => { console.log('confirm'); },
        onCancel: () => { console.log('cancel'); }
      });
    },
    handleSwitchChange() {
      this.$Alert({
        message: this.switchValue
      });
    },
    testAction(col, index) {
      this.$Confirm({
        message: `col: ${col}, index: ${index}`,
        title: 'test'
      });  
    },
    getTableData() {
      const data = this.$refs.multipleTable.exportSelection();
      console.log(data);
    }
  }
};
</script>

<style lang="scss" scoped>
.group {
  margin: 20px 0;
}

.carousel-div {
  width: 50%;
  height: 200px;
  margin: 0 auto;
}

.loading-box {
  height: 200px;
  width: 100px;
  border: 1px solid #ccc;
}
</style>

