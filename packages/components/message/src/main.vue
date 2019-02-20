<template>
  <transition name="imax__message-fade">
    <div class="imax__message">
      {{ message }}
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      type: ''
    }
  }
}
</script>
