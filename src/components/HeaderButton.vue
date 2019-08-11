<template>
  <div class="hamburger-menu" @click.prevent="$emit('open-menu')">
    <span class="hamburger-menu__line"></span>
    <span class="hamburger-menu__line"></span>
    <span class="hamburger-menu__line"></span>
  </div>
</template>

<style lang="sass" scoped>
.hamburger-menu
  display: flex
  flex-flow: column
  justify-content: center
  align-content: center
  width: 3rem
  background: transparent
  cursor: pointer
  &__line
    width: 100%
    height: 0.5rem
    background: $dark-grey
    margin: 0.25rem 0
    border-radius: 10px
</style>
