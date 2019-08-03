<template>
  <header>
    <HeaderButton @open-menu="openMenu"/>
    <HeaderSearch/>
    <HeaderMenu :class="{nav_active: isActiveMenu}" @close-menu="closeMenu"/>
    <HeaderOverlay :class="{overlay_active: isActiveOverlay}" @close-menu="closeMenu"/>
  </header>
</template>

<script>
import HeaderButton from '@/components/HeaderButton.vue'
import HeaderSearch from '@/components/HeaderSearch.vue'
import HeaderMenu from '@/components/HeaderMenu.vue'
import HeaderOverlay from '@/components/HeaderOverlay.vue'

export default {
  name: 'TheHeader',
  data() {
    return {
      isActiveMenu: false,
      isActiveOverlay: false
    };
  },
  methods: {
    openMenu() {
      this.isActiveMenu = true
      this.isActiveOverlay = true
    },
    closeMenu() {
      this.isActiveMenu = false
      this.isActiveOverlay = false
    }
  },
  components: {
    HeaderSearch,
    HeaderButton,
    HeaderMenu,
    HeaderOverlay
  }
}
</script>

<style lang="sass" scoped>
header
  width: 100%
  padding: 2.8rem
  position: relative
  top: 0
  left: 0
  display: flex
  justify-content: space-between
  align-items: center
</style>
