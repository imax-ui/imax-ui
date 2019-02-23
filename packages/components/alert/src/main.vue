<template>
  <transition name="fade-in-top">
    <div class="imax-alert">
      <div class="imax-alert__header">
        <div class="imax-alert--title">
          {{ title }}
        </div>
      </div>
      <div class="imax-alert__inner">
        {{ message }}
      </div>
      <div class="imax-alert__confirm-text">
        {{ confirmText }}
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      title: '',
      confirmText: ''
    }
  }
}
</script>
