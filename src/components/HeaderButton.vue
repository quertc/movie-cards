<template>
  <div
    class="hamburger-menu"
    title="Open Menu"
    @click="$emit('open-menu')"
  >
    <span class="hamburger-menu__line" />
    <span class="hamburger-menu__line" />
    <span class="hamburger-menu__line" />
  </div>
</template>

<style lang="sass" scoped>
.hamburger-menu
  display: flex
  flex-flow: column
  justify-content: center
  align-content: center
  width: 3.2rem
  background: transparent
  cursor: pointer
  &__line
    height: 0.5rem
    margin: 0.25rem 0
    background: $dark-grey
    border-radius: 1rem
</style>
