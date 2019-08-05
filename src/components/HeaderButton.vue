<template>
  <div class="hamburger-menu" @click.prevent="$emit('open-menu')">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped lang="sass">
.hamburger-menu
  display: flex
  flex-flow: column
  justify-content: center
  align-content: center
  flex-basis: 3rem
  background: transparent
  cursor: pointer
  span
    width: 100%
    height: 0.5rem
    background: $dark-grey
    margin: 0.25rem 0
    border-radius: 10px
</style>
