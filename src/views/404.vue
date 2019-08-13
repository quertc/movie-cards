<template>
  <main class="main">
    <img src="@/assets/404.svg" class="main__image" alt="404: Page not found">
    <HomeButton/>
  </main>
</template>

<script>
import HomeButton from '@/components/HomeButton.vue'

export default {
  components: {
    HomeButton
  }
}
</script>

<style lang="sass" scoped>
.main
  margin-top: 0.5rem
  padding: 0.6rem
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  &__image
    width: 65rem
    height: 42rem
    text-align: center
    margin-bottom: 0.2rem
</style>
