<template>
  <main class="main">
    <template v-if="searchData.results">
      <div
        v-if="searchDataMovies.length"
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
import { mapState, mapMutations, mapActions } from 'vuex';

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
    ...mapMutations(['clearSearchData']),
    ...mapActions(['getSearchData']),
    async loadMoreMovies() {
      await this.getSearchData([this.$route.params.query, this.searchData.page + 1]);

      if (this.searchData.page >= this.searchData.total_pages) {
        this.hidePagination = true;
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.main
  margin-top: .4rem
  padding: 1.5rem 3.1rem
  &__title
    margin-bottom: 3.6rem
  &__not-found
    display: flex
    flex-flow: column
    justify-content: center
    align-items: center
    &-title
      color: $dark-grey
      font-size: 3rem
      font-weight: 300
    &-description
      text-align: center
      color: lighten($dark-grey, 6%)
      font-weight: 600
    &-image
      width: 40rem
      height: 40rem
      margin: .4rem 0
      text-align: center
      line-height: 40rem
  &__pagination
    margin-top: 1.4rem
    &_hidden
      visibility: hidden
      opacity: 0

@media (max-width: 480px)
  .main
    &__not-found-image
      width: 35rem
      height: 35rem

@media (max-width: 390px)
  .main
    &__not-found-image
      width: 30rem
      height: 30rem
</style>
