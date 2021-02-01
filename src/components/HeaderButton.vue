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
  cursor: pointer
  background: transparent
  &__line
    height: .5rem
    margin: .25rem 0
    border-radius: 1rem
    background: $dark-grey
</style>
