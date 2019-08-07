<template>
  <main class="main">
    <h1 class="main__caption">
      {{ category | toUpperCase }}
      <span class="main__caption-span">movies</span>
    </h1>
  </main>
</template>

<script>
export default {
  name: 'discover',
  props: {
    category: String
  },
  filters: {
    toUpperCase(value) {
      if (!value) return '';
      value = value.toString();
      return value.replace(/_/g, ' ').toUpperCase();
    }
  },
  beforeRouteUpdate(to, from, next) {
    const availableCategories = ['popular', 'top_rated', 'upcoming'];
    if (!availableCategories.includes(to.params.category)) {
      next('/404');
    } else {
      next();
    };
  },
  beforeRouteEnter(to, from, next) {
    const availableCategories = ['popular', 'top_rated', 'upcoming'];
    if (!availableCategories.includes(to.params.category)) {
      next('/404');
    } else {
      next();
    };
  }
}
</script>

<style lang="sass" scoped>
.main
  margin-top: 0.6rem
  padding: 2.6rem 2.8rem
  &__caption
    display: flex
    flex-flow: column
    align-items: left
    font-weight: 300
    font-size: 2.4rem
    color: $dark-grey
    letter-spacing: -0.25px
    line-height: 1.1
    &-span
      font-weight: 600
      font-size: 1.4rem
      color: lighten($dark-grey, 6%)
      text-transform: uppercase
</style>
