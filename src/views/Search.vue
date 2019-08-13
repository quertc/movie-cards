<template>
  <main class="main">
    <div v-if="searchData.total_results" key="search-results" class="main__results">
      <MoviesListTitle :title="query" subtitle="search results" class="main__title"/>
      <MoviesList>
        <MoviesListItem v-for="movie in searchDataMovies" :key="movie.id" :movie="movie"/>
      </MoviesList>
      <MoviesListPagination @load-more="loadMoreMovies" class="main__pagination" :class="{main__pagination_active: isActive}"/>
    </div>
    <div v-else key="search-error" class="main__error">
      <div class="main__not-found">
        <h2 class="main__not-found-title">Sorry!</h2>
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
import MoviesListTitle from '@/components/MoviesListTitle.vue'
import MoviesListPagination from '@/components/MoviesListPagination.vue'
import HomeButton from '@/components/HomeButton.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  data() {
    return {
      isActive: false
    }
  },
  props: {
    query: {
      type: String,
      required: true
    }
  },
  components: {
    MoviesList,
    MoviesListItem,
    MoviesListTitle,
    MoviesListPagination,
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
    ...mapMutations(['clearSearchData']),
    loadMoreMovies() {
      if (this.searchData.page + 1>= this.searchData.total_pages) {
        this.isActive = true;
      };
      this.getSearchData([this.$route.params.query, this.searchData.page + 1]);
    }
  },
  beforeRouteEnter(to, from, next) {
    next(async vm => {
      await vm.getSearchData([to.params.query]);
      if (vm.searchData.page >= vm.searchData.total_pages) {
        vm.isActive = true;
      };
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.getSearchData([to.params.query]);
    if (this.searchData.page >= this.searchData.total_pages) {
      this.isActive = true;
    };
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
  &__title
    margin-bottom: 3.6rem
  &__not-found
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    &-title
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
  &__pagination
    margin-top: 1.6rem
    &.main__pagination_active
      visibility: hidden
      opacity: 0
</style>
