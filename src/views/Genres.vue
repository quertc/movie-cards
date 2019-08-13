<template>
  <main class="main">
    <MoviesListTitle :title="genre" subtitle="movies" class="main__title"/>
    <MoviesList>
      <MoviesListItem v-for="movie in genreDataMovies" :key="movie.id" :movie="movie"/>
    </MoviesList>
    <MoviesListPagination @load-more="loadMoreMovies" class="main__pagination"/>
  </main>
</template>

<script>
import MoviesList from '@/components/MoviesList.vue'
import MoviesListItem from '@/components/MoviesListItem.vue'
import MoviesListTitle from '@/components/MoviesListTitle.vue'
import MoviesListPagination from '@/components/MoviesListPagination.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  props: {
    genre: {
      type: String,
      required: true
    }
  },
  components: {
    MoviesList,
    MoviesListItem,
    MoviesListTitle,
    MoviesListPagination
  },
  filters: {
    toUpperCase(value) {
      if (!value) return '';
      value = value.toString();
      return value.replace(/_/g, ' ').toUpperCase();
    }
  },
  computed: mapGetters(['genresList', 'genresListNames', 'genreData', 'genreDataMovies']),
  methods: {
    ...mapActions(['fetchGenresList', 'fetchGenreData']),
    ...mapMutations(['clearGenreData']),
    loadMoreMovies() {
      const genreID = this.genresList.find(obj => obj.name.toLowerCase() == this.$route.params.genre.replace(/_/g, ' ').toLowerCase()).id;
      this.fetchGenreData([genreID, this.genreData.page + 1]);
    }
  },
  beforeRouteEnter(to, from, next) {
    next(async vm => {
      let genres = vm.genresListNames;
      if (!genres.length) {
        await vm.fetchGenresList();
        genres = await vm.genresListNames;
      };
      if (!genres.includes(to.params.genre)) {
        next('/404');
      } else {
        const genreID = vm.genresList.find(obj => obj.name.toLowerCase() == to.params.genre.replace(/_/g, ' ').toLowerCase()).id;
        vm.fetchGenreData([genreID]);
      };
    });
  },
  async beforeRouteUpdate(to, from, next) {
    let genres = this.genresListNames;
    if (!genres.length) {
      await this.fetchGenresList();
      genres = await this.genresListNames;
    };
    if (!genres.includes(to.params.genre)) {
      next('/404');
    } else {
      const genreID = this.genresList.find(obj => obj.name.toLowerCase() == to.params.genre.replace(/_/g, ' ').toLowerCase()).id;
      this.fetchGenreData([genreID]);
      next();
    };
  },
  beforeDestroy() {
    this.clearGenreData();
  }
}
</script>

<style lang="sass" scoped>
.main
  margin-top: 0.4rem
  padding: 1.5rem 3.1rem
  &__title
    margin-bottom: 3.6rem
  &__pagination
    margin-top: 1.8rem
</style>
