<template>
  <main class="main">
    <h1 class="main__caption">
      {{ category | toUpperCase }}
      <span class="main__caption-span">movies</span>
    </h1>
    <div class="main__container">
      <MovieItem v-for="movie in allDiscoverMovies" :key="movie.id" :movie="movie"/>
    </div>
  </main>
</template>

<script>
import MovieItem from '@/components/MovieItem.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    category: String
  },
  computed: mapGetters(['allDiscoverMovies']),
  methods: mapActions(['fetchDiscoverMovies']),
  components: {
    MovieItem
  },
  filters: {
    toUpperCase(value) {
      if (!value) return '';
      value = value.toString();
      return value.replace(/_/g, ' ').toUpperCase();
    }
  },
  beforeRouteUpdate(to, from, next) {
    if (!['popular', 'top_rated', 'upcoming'].includes(to.params.category)) {
      next('/404');
    } else {
      this.fetchDiscoverMovies(to.params.category);
      next();
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (!['popular', 'top_rated', 'upcoming'].includes(to.params.category)) {
        next('/404');
      } else {
        vm.fetchDiscoverMovies(to.params.category);
        next();
      };
    });
  }
}
</script>

<style lang="sass" scoped>
.main
  margin-top: 0.6rem
  padding: 2.2rem 3rem
  &__caption
    display: flex
    flex-flow: column
    align-items: left
    font-weight: 300
    font-size: 2.4rem
    color: $dark-grey
    letter-spacing: -0.25px
    line-height: 1.1
    margin-bottom: 3.6rem
    &-span
      font-weight: 600
      font-size: 1.4rem
      color: lighten($dark-grey, 6%)
      text-transform: uppercase
  &__container
    padding: 0.8rem 4rem
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(10rem, 22.5rem))
    justify-content: space-evenly
    align-content: space-between
    -webkit-box-align: start
    gap: 4rem 2.6rem
</style>
