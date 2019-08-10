<template>
  <main class="main">
    <h1 class="main__caption">
      {{ query | toUpperCase }}
      <span class="main__caption-span">search results</span>
    </h1>
    <div class="main__container">
      <MovieItem v-for="movie in allSearchMovies" :key="movie.id" :movie="movie"/>
    </div>
  </main>
</template>

<script>
import MovieItem from '@/components/MovieItem.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    query: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      searchMovies: []
    }
  },
  computed: mapGetters(['allSearchMovies']),
  methods: mapActions(['getSearchMovies']),
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
    this.getSearchMovies(to.params.query);
    next();
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getSearchMovies(to.params.query);
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
      font-size: 1.3rem
      color: lighten($dark-grey, 6%)
      text-transform: uppercase
  &__container
    padding: 0.8rem 4rem
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(10rem, 22rem))
    justify-content: space-evenly
    align-content: space-between
    -webkit-box-align: start
    gap: 4rem 2.7rem
</style>
