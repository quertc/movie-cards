<template>
  <transition name="fade">
    <div
      v-show="loading"
      class="preloader"
    >
      <img
        src="@/assets/pulse-loader.svg"
        class="preloader__loader"
      >
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
.preloader
  position: fixed
  z-index: 3000
  display: flex
  justify-content: center
  align-items: center
  width: 100vw
  height: 100vh
  background: darken($white, 5%)
  &__loader
    width: 10rem
    height: 10rem
</style>
