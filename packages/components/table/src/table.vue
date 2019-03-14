<template>
  <table
    class="imax-table"
    :class="[{
      'imax-table--stripe': stripe
    }]"
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
          :style="{width: getColWidth(col.width)}"
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
        class="imax-table__tr"
        :class="[{
          'imax-table__tr--stripe': filterStripeName(rowIndex)
        }]"
      > 
        <td
          v-if="checkbox"
          class="imax-table__td"
        >
          <ImCheckbox
            :value="findData(rowIndex)"
            @change="toggleSelect($event, rowIndex)"
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
    },
    stripe: {
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
    filterStripeName(rowIndex) {
      if (!this.stripe) return false;
      return rowIndex % 2 === 1 ? true : false;
      
    },
    getColWidth(width) {
      return width ? width + 'px' : '';
    },
    toggleSelect(event, rowIndex) {
      if (this.selected.includes(rowIndex)) {
        const index = this.selected.indexOf(rowIndex);
        this.selected.splice(index, 1);
      }
      else {
        this.selected.push(rowIndex);
      }
    },
    findData(rowIndex) {
      return this.selected.includes(rowIndex);
    },
    exportSelection() {
      return this.selected.map(index => this.data[index]);
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

