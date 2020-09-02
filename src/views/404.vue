<template>
  <main class="main">
    <img
      src="@/assets/404.svg"
      class="main__image"
      alt="404: Page not found"
    >
    <HomeButton />
  </main>
</template>

<script>
import HomeButton from '@/components/HomeButton.vue';

export default {
  components: {
    HomeButton,
  },
};
</script>

<style lang="sass" scoped>
.main
  display: flex
  flex-flow: column
  justify-content: center
  align-items: center
  padding: 0.5rem
  &__image
    width: 65rem
    height: 42rem
    margin-bottom: 0.4rem
    line-height: 42rem
    text-align: center
</style>
