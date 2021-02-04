<template>
  <main class="main">
    <MoviesListTitle
      :title="genre"
      subtitle="movies"
      class="main__title"
    />
    <MoviesList>
      <MoviesListItem
        v-for="movie in genreDataMovies"
        :key="movie.id"
        :movie="movie"
      />
    </MoviesList>
    <MoviesListPagination
      class="main__pagination"
      :class="{ main__pagination_hidden: hidePagination }"
      @load-more="loadMoreMovies"
    />
  </main>
</template>

<script>
import MoviesListTitle from '@/components/MoviesListTitle.vue';
import MoviesList from '@/components/MoviesList.vue';
import MoviesListItem from '@/components/MoviesListItem.vue';
import MoviesListPagination from '@/components/MoviesListPagination.vue';
import {
  mapState, mapMutations, mapActions, mapGetters,
} from 'vuex';

export default {
  components: {
    MoviesListTitle,
    MoviesList,
    MoviesListItem,
    MoviesListPagination,
  },
  props: {
    genre: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      hidePagination: false,
    };
  },
  computed: {
    ...mapState({
      genreData: state => state.genres.genreData,
      genreDataMovies: state => state.genres.genreDataMovies,
      genresList: state => state.genres.genresList,
    }),
    ...mapGetters(['genresListNames']),
    genreId() {
      return this.genresList.find(genre => genre.name.toLowerCase() === this.$route.params.genre.replace(/_/g, ' ').toLowerCase()).id;
    },
  },
  async mounted() {
    // FIXME: two fetchGenresList requests due to HeaderMenu component
    if (!this.genresListNames.length) {
      await this.fetchGenresList();
    }

    if (!this.genresListNames.includes(this.$route.params.genre)) {
      this.$router.push('/');
    } else {
      await this.fetchGenreData([this.genreId]);

      if (this.genreData.page >= this.genreData.total_pages) {
        this.hidePagination = true;
      }
    }
  },
  beforeDestroy() {
    this.clearGenreData();
  },
  methods: {
    ...mapMutations(['clearGenreData']),
    ...mapActions(['fetchGenreData', 'fetchGenresList']),
    async loadMoreMovies() {
      await this.fetchGenreData([this.genreId, this.genreData.page + 1]);

      if (this.genreData.page >= this.genreData.total_pages) {
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
  &__pagination
    margin-top: 1.4rem
    &_hidden
      visibility: hidden
      opacity: 0
</style>
