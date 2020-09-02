<template>
  <div class="movie-container">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.movie-container
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(10rem, 22rem))
  justify-content: space-evenly
  grid-gap: 2rem
  padding: 1rem 4rem
</style>
