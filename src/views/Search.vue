<template>
  <main class="main">
    <template v-if="searchData.results">
      <div
        v-if="searchData.results.length"
        key="search-results"
        class="main__results"
      >
        <MoviesListTitle
          :title="query"
          subtitle="search results"
          class="main__title"
        />
        <MoviesList>
          <MoviesListItem
            v-for="movie in searchDataMovies"
            :key="movie.id"
            :movie="movie"
          />
        </MoviesList>
        <MoviesListPagination
          class="main__pagination"
          :class="{ main__pagination_hidden: hidePagination }"
          @load-more="loadMoreMovies"
        />
      </div>
      <div
        v-else
        key="search-error"
        class="main__error"
      >
        <div class="main__not-found">
          <h2 class="main__not-found-title">
            Sorry!
          </h2>
          <p class="main__not-found-description">
            Nothing found for {{ $route.params.query }}
          </p>
          <img
            src="@/assets/not-found.svg"
            class="main__not-found-image"
            alt="Not Found"
          >
          <HomeButton />
        </div>
      </div>
    </template>
  </main>
</template>

<script>
import MoviesListTitle from '@/components/MoviesListTitle.vue';
import MoviesList from '@/components/MoviesList.vue';
import MoviesListItem from '@/components/MoviesListItem.vue';
import MoviesListPagination from '@/components/MoviesListPagination.vue';
import HomeButton from '@/components/HomeButton.vue';
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  components: {
    MoviesListTitle,
    MoviesList,
    MoviesListItem,
    MoviesListPagination,
    HomeButton,
  },
  props: {
    query: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      hidePagination: false,
    };
  },
  computed: mapState({
    searchData: state => state.search.searchData,
    searchDataMovies: state => state.search.searchDataMovies,
  }),
  async mounted() {
    await this.getSearchData([this.$route.params.query]);

    if (this.searchData.page >= this.searchData.total_pages) {
      this.hidePagination = true;
    }
  },
  beforeDestroy() {
    this.clearSearchData();
  },
  methods: {
    ...mapActions(['getSearchData']),
    ...mapMutations(['clearSearchData']),
    loadMoreMovies() {
      if (this.searchData.page + 1 >= this.searchData.total_pages) {
        this.hidePagination = true;
      }

      this.getSearchData([this.$route.params.query, this.searchData.page + 1]);
    },
  },
};
</script>

<style lang="sass" scoped>
.main
  margin-top: 0.4rem
  padding: 1.5rem 3.1rem
  &__title
    margin-bottom: 3.6rem
  &__not-found
    display: flex
    flex-flow: column
    justify-content: center
    align-items: center
    &-title
      font-size: 3rem
      font-weight: 300
      color: $dark-grey
    &-description
      text-align: center
      font-weight: 600
      color: lighten($dark-grey, 6%)
    &-image
      width: 40rem
      height: 40rem
      margin: 0.4rem 0
      line-height: 40rem
      text-align: center
  &__pagination
    margin-top: 1.4rem
    &_hidden
      visibility: hidden
      opacity: 0
</style>
