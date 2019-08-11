<template>
  <main class="main">
    <h1 class="main__caption">
      {{ genre | toUpperCase }}
      <span class="main__caption-span">movies</span>
    </h1>
    <MoviesList>
      <MoviesListItem v-for="movie in allGenreMovies" :key="movie.id" :movie="movie"/>
    </MoviesList>
  </main>
</template>

<script>
import MoviesList from '@/components/MoviesList.vue'
import MoviesListItem from '@/components/MoviesListItem.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    genre: {
      type: String,
      required: true
    }
  },
  components: {
    MoviesList,
    MoviesListItem
  },
  filters: {
    toUpperCase(value) {
      if (!value) return '';
      value = value.toString();
      return value.replace(/_/g, ' ').toUpperCase();
    }
  },
  computed: mapGetters(['allGenresList', 'allGenresName', 'allGenreMovies']),
  methods: mapActions(['fetchGenresList', 'fetchGenreMovies']),
  async beforeRouteUpdate(to, from, next) {
    let genres = this.allGenresName;
    if (!genres.length) {
      await this.fetchGenresList();
      genres = await this.allGenresName;
    };
    if (!genres.includes(to.params.genre)) {
      next('/404');
    } else {
      const genreID = this.allGenresList.find(obj => obj.name.toLowerCase() == to.params.genre.replace(/_/g, ' ').toLowerCase()).id;
      this.fetchGenreMovies(genreID);
      next();
    };
  },
  beforeRouteEnter(to, from, next) {
    next(async vm => {
      let genres = vm.allGenresName;
      if (!genres.length) {
        await vm.fetchGenresList();
        genres = await vm.allGenresName;
      };
      if (!genres.includes(to.params.genre)) {
        next('/404');
      } else {
        const genreID = vm.allGenresList.find(obj => obj.name.toLowerCase() == to.params.genre.replace(/_/g, ' ').toLowerCase()).id;
        vm.fetchGenreMovies(genreID);
        next();
      };
    });
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
    line-height: 1.15
    margin-bottom: 3.6rem
    &-span
      font-weight: 600
      font-size: 1.3rem
      color: lighten($dark-grey, 6%)
      text-transform: uppercase
</style>
