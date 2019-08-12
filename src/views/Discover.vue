<template>
  <main class="main">
    <h1 class="main__caption">
      {{ category | toUpperCase }}
      <span class="main__caption-span">movies</span>
    </h1>
    <MoviesList>
      <MoviesListItem v-for="movie in discoverDataMovies" :key="movie.id" :movie="movie"/>
    </MoviesList>
  </main>
</template>

<script>
import MoviesList from '@/components/MoviesList.vue'
import MoviesListItem from '@/components/MoviesListItem.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  props: {
    category: {
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
  computed: mapGetters(['discoverDataMovies', 'discoverCategories']),
  methods: {
    ...mapActions(['fetchDiscoverData']),
    ...mapMutations(['clearDiscoverData'])
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (!vm.discoverCategories.includes(to.params.category)) {
        next('/404');
      } else {
        vm.fetchDiscoverData(to.params.category);
        next();
      };
    });
  },
  beforeRouteUpdate(to, from, next) {
    if (!this.discoverCategories.includes(to.params.category)) {
      next('/404');
    } else {
      this.fetchDiscoverData(to.params.category);
      next();
    };
  },
  beforeDestroy() {
    this.clearDiscoverData();
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
</style>
