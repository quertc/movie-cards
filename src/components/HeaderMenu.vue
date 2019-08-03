<template>
  <nav class="nav">
    <a href="" class="nav__link" v-for="item in 16" :key="item">{{ item }}</a>
  </nav>
</template>

<script>
export default {
  name: 'HeaderMenu'
}
</script>

<style lang="sass" scoped>
.nav
  position: fixed
  z-index: 1000
  top: 0
  left: -100%
  height: 100%
  width: 280px
  display: flex
  flex-flow: column
  background: $dark-grey
  overflow-y: auto
  transition: left 0.6s cubic-bezier(0.19, 1, 0.22, 1)
  &.active
    left: 0
  &__link
    padding: 20px
    font-size: 1.2rem
    text-decoration: none
    letter-spacing: 3px
    line-height: 1
    color: #fff


</style>

