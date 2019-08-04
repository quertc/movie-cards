<template>
  <main class="main">
    <h1 class="main__caption">
      {{  $route.params.type | toUpperCase }}
      <span class="main__caption-span">movies</span>
    </h1>
  </main>
</template>

<script>
export default {
  name: 'discover',
  filters: {
    toUpperCase(value) {
      if (!value) return '';
      value = value.toString();
      return value.toUpperCase();
    }
  }
}
</script>

<style lang="sass" scoped>
.main
  margin-top: 1.2rem
  padding: 3rem 2.8rem
  &__caption
    display: flex
    flex-flow: column
    align-items: left
    font-weight: 300
    font-size: 2.4rem
    color: $dark-grey
    letter-spacing: -0.25px
    line-height: 1
    &-span
      font-weight: 600
      font-size: 1.4rem
      color: lighten($dark-grey, 6%)
      text-transform: uppercase
</style>
