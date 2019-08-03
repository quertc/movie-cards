<template>
  <header>
    <HeaderButton @open-menu="openMenu"/>
    <HeaderSearch/>
    <HeaderMenu :class="{active: isActive}"/>
  </header>
</template>

<script>
import HeaderButton from '@/components/HeaderButton.vue'
import HeaderSearch from '@/components/HeaderSearch.vue'
import HeaderMenu from '@/components/HeaderMenu.vue'

export default {
  name: 'TheHeader',
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    openMenu() {
      this.isActive = true
    }
  },
  components: {
    HeaderSearch,
    HeaderButton,
    HeaderMenu
  }
}
</script>

<style lang="sass" scoped>
header
  width: 100%
  padding: 27px
  position: relative
  top: 0
  left: 0
  display: flex
  justify-content: space-between
  align-items: center
</style>
