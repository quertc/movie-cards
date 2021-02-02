<template>
  <router-link
    to="/"
    class="movie-item"
  >
    <div class="container">
      <img
        v-if="movie.poster_path"
        :src="`${configuration.images ? configuration.images.secure_base_url : 'https://image.tmdb.org/t/p/'}w342${movie.poster_path}`"
        class="movie-item__poster"
      >
      <img
        v-else
        src="@/assets/no-image.png"
        class="movie-item__poster"
      >
      <div class="container__rating">
        {{ movie.vote_average }}/10
      </div>
    </div>
    <div class="movie-item__description">
      {{ movie.title }}
    </div>
  </router-link>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: mapState({
    configuration: state => state.configuration.configurationData,
  }),
};
</script>

<style lang="sass" scoped>
.movie-item
  position: relative
  display: flex
  flex-flow: column
  align-items: center
  transition: transform .25s ease-in-out
  text-decoration: none
  color: lighten($dark-grey, 8%)
  border-radius: .8rem
  .container
    position: relative
    height: 33rem
    &__rating
      position: absolute
      bottom: 0
      left: 0
      display: flex
      justify-content: center
      align-items: center
      width: 100%
      height: 6.5rem
      color: #fff
      border-radius: 0 0 .8rem .8rem
      background: rgba(0, 0, 0, .5)
  &__poster
    width: 100%
    height: 33rem
    transition: box-shadow .25s ease-in-out
    border-radius: .8rem
    box-shadow: 0 1rem 4rem rgba(0, 0, 0, .14)
  &__description
    padding: 1rem 1.8rem
    text-align: center
    font-size: 1.38rem
  &:hover
    transform: scale(1.03)
    .movie-item__poster
      box-shadow: 0 1rem 3rem rgba(0, 0, 0, .2)
</style>
