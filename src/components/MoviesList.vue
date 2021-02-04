<template>
  <div class="movie-container">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.movie-container
  display: grid
  justify-content: space-evenly
  padding: 1rem 4rem
  grid-gap: 2rem
  grid-template-columns: repeat(auto-fit, minmax(16rem, 22rem))

@media (max-width: 630px)
  .movie-container
    padding: 1rem 0
    grid-gap: 2rem 1.5rem
    grid-template-columns: repeat(auto-fit, minmax(16rem, 20rem))
</style>
