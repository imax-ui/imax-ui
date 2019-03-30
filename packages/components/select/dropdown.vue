<template>
  <div
    class="imax__dropdown"
    :class="{
      'is-show': show
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ImDropdown',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>
