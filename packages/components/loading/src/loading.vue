<template>
  <transition name="im-loading-fade">
    <div
      v-show="visible"
      class="im-loading-mask"
    >
      loading
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
