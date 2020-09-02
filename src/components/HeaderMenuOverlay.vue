<template>
  <div
    class="overlay"
    title="Close Menu"
    @click="$emit('close-menu')"
  />
</template>

<style lang="sass" scoped>
.overlay
  position: fixed
  top: 0
  left: 0
  z-index: 500
  width: 100vw
  height: 100vh
  visibility: hidden
  opacity: 0
  background: $dark-grey
  transition: visibility 0.6s ease-in-out, opacity 0.6s ease-in-out
  &.overlay_active
    visibility: visible
    opacity: 0.4
</style>
