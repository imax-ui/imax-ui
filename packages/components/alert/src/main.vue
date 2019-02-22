<template>
  <transition name="imax__alert-fade">
    <div class="imax__alert">
      <div class="imax__alert__header">
        <div class="imax__alert--title">
          {{ title }}
        </div>
      </div>
      <div class="imax__alert__inner">
        {{ message }}
      </div>
      <div class="imax__alert__confirm-text">
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
