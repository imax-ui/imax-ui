<template>
  <table class="imax-table">
    <thead>
      <tr>
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
import Render from './render';
export default {
  name: 'ImTable',
  components: { Render },
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
    }
  }
}
</script>

