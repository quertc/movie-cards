<template>
  <main class="main">
    <h1 class="main__caption">
      {{ genre | toUpperCase }}
      <span class="main__caption-span">movies</span>
    </h1>
    <div class="main__container">
      <MovieItem v-for="movie in allGenreMovies" :key="movie.id" :movie="movie"/>
    </div>
  </main>
</template>

<script>
import MovieItem from '@/components/MovieItem.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    genre: {
      type: String,
      required: true
    }
  },
  computed: mapGetters(['allGenresList', 'allGenresName', 'allGenreMovies']),
  methods: mapActions(['fetchGenresList', 'fetchGenreMovies']),
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
    line-height: 1.15
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
