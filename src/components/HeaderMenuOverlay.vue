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
  visibility: hidden
  width: 100vw
  height: 100vh
  transition: visibility .5s ease-in-out, opacity .5s ease-in-out
  opacity: 0
  background: $dark-grey
  &.overlay_active
    visibility: visible
    opacity: .4
</style>
