<template>
  <transition name="imax-loading-fade">
    <div
      v-show="visible"
      :class="[{
        'imax-loading__visible': visible
      }]"
      class="imax-loading__mask"
    >
      <div class="imax-loading__circular">
        <svg
          viewBox="25 25 50 50"
          class="imax-loading__circular--svg"
        >
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            class="circle"
          />
        </svg>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ImLoading',
  data() {
    return {
      visible: false
    };
  }
};
</script>
