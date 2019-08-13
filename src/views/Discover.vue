<template>
  <main class="main">
    <MoviesListTitle :title="category" subtitle="movies" class="main__title"/>
    <MoviesList>
      <MoviesListItem v-for="movie in discoverDataMovies" :key="movie.id" :movie="movie"/>
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
    category: {
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
  computed: mapGetters(['discoverData', 'discoverDataMovies', 'discoverCategories']),
  methods: {
    ...mapActions(['fetchDiscoverData']),
    ...mapMutations(['clearDiscoverData']),
    loadMoreMovies() {
      this.fetchDiscoverData([this.$route.params.category, this.discoverData.page + 1]);
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (!vm.discoverCategories.includes(to.params.category)) {
        next('/404');
      } else {
        vm.fetchDiscoverData([to.params.category]);
      };
    });
  },
  beforeRouteUpdate(to, from, next) {
    if (!this.discoverCategories.includes(to.params.category)) {
      next('/404');
    } else {
      this.fetchDiscoverData([to.params.category]);
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
  &__title
    margin-bottom: 3.6rem
  &__pagination
    margin-top: 1.8rem
</style>
