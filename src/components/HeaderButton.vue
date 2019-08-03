<template>
  <div class="hamburger-menu" @click="$emit('open-menu')">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped lang="sass">
.hamburger-menu
  display: flex
  flex-direction: column
  justify-content: center
  align-content: center
  flex-basis: 30px
  background: transparent
  border: none
  cursor: pointer
  span
    width: 100%
    height: 5px
    background: $dark-grey
    margin: 2.5px 0
    border-radius: 10px
</style>
