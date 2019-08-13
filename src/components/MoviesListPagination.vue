<template>
  <div class="pagination">
    <button class="pagination__button" @click="$emit('load-more')">LOAD MORE</button>
  </div>
</template>

<style lang="sass" scoped>
.pagination
  display: flex
  justify-content: center
  width: 100%
  padding: 1rem
  &__button
    padding: 1rem 0.8rem
    background: $white
    border: 1px solid $dark-grey
    text-align: center
    cursor: pointer
    transition: all 0.3s ease-in-out
    box-shadow: 0 0 5rem rgba(0,0,0,0.14)
    &:hover
      background: $dark-grey
      color: $white
      transform: translateY(-0.3rem)
      box-shadow: none
</style>