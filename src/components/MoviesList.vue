<template>
  <div class="movie-container">
    <slot></slot>
  </div>
</template>

<style lang="sass" scoped>
.movie-container
  padding: 0.8rem 4rem
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(10rem, 22rem))
  justify-content: space-evenly
  align-content: space-between
  grid-gap: 4rem 2.65rem
</style>
