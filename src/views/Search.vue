<template>
  <main class="main">
    <div v-if="searchData.total_results" key="search-results" class="main__results">
      <h1 class="main__caption">
        {{ query | toUpperCase }}
        <span class="main__caption-span">search results</span>
      </h1>
      <MoviesList>
        <MoviesListItem v-for="movie in searchDataMovies" :key="movie.id" :movie="movie"/>
      </MoviesList>
    </div>
    <div v-else key="search-error" class="main__error">
      <div class="main__not-found">
        <h2 class="main__not-found-caption">Sorry!</h2>
        <p class="main__not-found-description">Nothing found for {{ $route.params.query }}</p>
        <img src="@/assets/not-found.svg" class="main__not-found-image" alt="Not found">
        <HomeButton/>
      </div>
    </div>
  </main>
</template>

<script>
import MoviesList from '@/components/MoviesList.vue'
import MoviesListItem from '@/components/MoviesListItem.vue'
import HomeButton from '@/components/HomeButton.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  props: {
    query: {
      type: String,
      required: true
    }
  },
  components: {
    MoviesList,
    MoviesListItem,
    HomeButton
  },
  filters: {
    toUpperCase(value) {
      if (!value) return '';
      value = value.toString();
      return value.replace(/_/g, ' ').toUpperCase();
    }
  },
  computed: mapGetters(['searchDataMovies', 'searchData']),
  methods: { 
    ...mapActions(['getSearchData']),
    ...mapMutations(['clearSearchData'])
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getSearchData(to.params.query);
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.getSearchData(to.params.query);
    next();
  },
  beforeDestroy() {
    this.clearSearchData();
  }
}
</script>

<style lang="sass" scoped>
.main
  margin-top: 0.4rem
  padding: 1.5rem 3.1rem
  &__caption
    display: flex
    flex-direction: column
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
  &__not-found
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    &-caption
      font-weight: 300
      font-size: 3rem
      color: $dark-grey
    &-description
      text-align: center
      font-weight: 600
      color: lighten($dark-grey, 6%)
    &-image
      color: $green
      text-align: center
      width: 40rem
      height: 40rem
      margin-top: 0.3rem
</style>
