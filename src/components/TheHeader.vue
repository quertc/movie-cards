<template>
  <header>
    <HeaderButton @open-menu="switchMenu"/>
    <HeaderSearch/>
    <HeaderMenu :class="{nav_active: isActiveMenu}" @close-menu="switchMenu"/>
    <HeaderOverlay :class="{overlay_active: isActiveMenu}" @close-menu="switchMenu"/>
  </header>
</template>

<script>
import HeaderButton from '@/components/HeaderButton.vue'
import HeaderSearch from '@/components/HeaderSearch.vue'
import HeaderMenu from '@/components/HeaderMenu.vue'
import HeaderOverlay from '@/components/HeaderOverlay.vue'

export default {
  data() {
    return {
      isActiveMenu: false
    };
  },
  methods: {
    switchMenu() {
      this.isActiveMenu = !this.isActiveMenu;
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
  padding: 3rem
  position: relative
  top: 0
  left: 0
  display: flex
  justify-content: space-between
  align-items: center
</style>
