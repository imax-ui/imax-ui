<template>
  <table
    class="imax-table"
    :border="0"
  >
    <thead>
      <tr>
        <th
          v-if="checkbox"
          style="width: 15px;"
          class="imax-table__th"
        >
          <im-checkbox
            :value="allSelect"
            @change="toggleAllSelect"
          />
        </th>
        <th
          v-for="(col, index) in columns"
          :key="index"
          class="imax-table__th"
        >
          {{ col.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row, rowIndex) in data"
        :key="rowIndex"
      > 
        <td
          v-if="checkbox"
          class="imax-table__td"
        >
          <ImCheckbox
            :value="findData(row)"
            @change="toggleSelect($event, row)"
          />
        </td>
        <td
          v-for="(col, colIndex) in columns"
          :key="colIndex"
          class="imax-table__td"
        > 
          <template v-if="'render' in col">
            <render
              :row="row"
              :column="col"
              :index="rowIndex"
              :render="col.render"
            />
          </template>
          <template v-if="'slot' in col">
            <slot
              :row="row"
              :column="col"
              :index="rowIndex"
              :name="col.slot"
            />
          </template>
          <template v-else>
            {{ row[col.key] }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ImCheckbox from 'packages/components/check-box/checkBox';
import Render from './render';
export default {
  name: 'ImTable',
  components: { Render, ImCheckbox },
  props: {
    columns: {
      type: Array,
      default () {
        return [];
      }
    },
    data: {
      type: Array,
      default () {
        return [];
      }
    },
    checkbox: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      allSelect: false,
      selected: []
    }
  },
  watch: {
    selected(list) {
      if (list.length === this.data.length) {
        this.allSelect = true;
      }
      else {
        this.allSelect = false;
      }
    }
  },
  methods: {
    toggleSelect(event, row) {
      const stringify = JSON.stringify(row);
      if (this.selected.includes(stringify)) {
        const index = this.selected.indexOf(stringify);
        this.selected.splice(index, 1);
      }
      else {
        this.selected.push(stringify);
      }
    },
    findData(row) {
      return this.selected.includes(JSON.stringify(row));
    },
    exportSelection() {
      return this.selected.map(item => JSON.parse(item));
    },
    toggleAllSelect() {
      this.allSelect = !this.allSelect;
      if (this.allSelect) {
        this.selected = this.data.map(row => JSON.stringify(row))
      }
      else {
        this.selected = [];
      }
    }
  }
}
</script>

