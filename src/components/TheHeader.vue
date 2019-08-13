<template>
  <header class="header">
    <HeaderButton @open-menu="switchMenu"/>
    <HeaderSearch/>
    <HeaderMenu :class="{nav_active: isActiveMenu}" @close-menu="switchMenu"/>
    <HeaderMenuOverlay :class="{overlay_active: isActiveMenu}" @close-menu="switchMenu"/>
  </header>
</template>

<script>
import HeaderButton from '@/components/HeaderButton.vue'
import HeaderSearch from '@/components/HeaderSearch.vue'
import HeaderMenu from '@/components/HeaderMenu.vue'
import HeaderMenuOverlay from '@/components/HeaderMenuOverlay.vue'

export default {
  data() {
    return {
      isActiveMenu: false
    };
  },
  components: {
    HeaderSearch,
    HeaderButton,
    HeaderMenu,
    HeaderMenuOverlay
  },
  methods: {
    switchMenu() {
      this.isActiveMenu = !this.isActiveMenu;
    }
  }
}
</script>

<style lang="sass" scoped>
.header
  width: 100%
  padding: 3.1rem
  position: relative
  top: 0
  left: 0
  display: flex
  justify-content: space-between
  align-items: center
</style>
