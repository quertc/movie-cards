<template>
  <router-link to="/" class="movie-item">
    <img v-if="movie.poster_path" :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" alt="Movie poster" class="movie-item__poster">
    <img v-else src="@/assets/no-image.png" alt="Movie poster" class="movie-item__poster">
    <div class="movie-item__description">{{ movie.title }}</div>
  </router-link>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.movie-item
  display: flex
  flex-flow: column
  text-decoration: none
  color: lighten($dark-grey, 8%)
  border-radius: 8px
  transition: transform 0.25s ease-in-out
  &__poster
    width: 100%
    height: 33rem
    border-radius: 8px
    box-shadow: 0 1rem 4rem rgba(0,0,0,0.14)
    transition: box-shadow 0.25s ease-in-out
  &__description
    display: flex
    flex-flow: column
    -webkit-box-pack: justify
    -webkit-box-align: center
    justify-content: space-between
    align-items: center
    text-align: center
    padding: 1rem 1.8rem
    font-size: 1.4rem
  &:hover
    transform: scale(1.03)
    .movie-item__poster
      box-shadow: 0 1rem 3rem rgba(0,0,0,0.2)
</style>
