<template>
  <header class="header">
    <HeaderButton @open-menu="switchMenu" />
    <HeaderSearch />
    <HeaderMenu
      :class="{nav_active: isActiveMenu}"
      @close-menu="switchMenu"
    />
    <HeaderMenuOverlay
      :class="{overlay_active: isActiveMenu}"
      @close-menu="switchMenu"
    />
  </header>
</template>

<script>
import HeaderButton from '@/components/HeaderButton.vue';
import HeaderSearch from '@/components/HeaderSearch.vue';
import HeaderMenu from '@/components/HeaderMenu.vue';
import HeaderMenuOverlay from '@/components/HeaderMenuOverlay.vue';

export default {
  components: {
    HeaderButton,
    HeaderSearch,
    HeaderMenu,
    HeaderMenuOverlay,
  },
  data() {
    return {
      isActiveMenu: false,
    };
  },
  methods: {
    switchMenu() {
      this.isActiveMenu = !this.isActiveMenu;
    },
  },
};
</script>

<style lang="sass" scoped>
.header
  position: relative
  top: 0
  left: 0
  display: flex
  justify-content: space-between
  align-items: center
  padding: 3.1rem
</style>
