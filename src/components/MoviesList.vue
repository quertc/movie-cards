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
</style>
