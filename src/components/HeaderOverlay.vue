<template>
  <div class="overlay" @click="$emit('close-menu')"></div>
</template>

<style lang="sass" scoped>
.overlay
  visibility: hidden
  opacity: 0
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  z-index: 500
  transition: opacity 0.6s ease-in-out, visibility 0.6s ease-in-out
  background: $dark-grey
  &.overlay_active
    visibility: visible
    opacity: 0.25
</style>
