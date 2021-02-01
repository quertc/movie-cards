<template>
  <div class="pagination">
    <button
      class="pagination__button"
      @click="$emit('load-more')"
    >
      LOAD MORE
    </button>
  </div>
</template>

<style lang="sass" scoped>
.pagination
  display: flex
  justify-content: center
  padding: 1rem
  &__button
    padding: .9rem 1.1rem
    cursor: pointer
    transition: all .3s ease-in-out
    text-align: center
    border: .1rem solid $dark-grey
    background: $white
    box-shadow: 0 .4rem .8rem rgba(0, 0, 0, .15)
    &:hover
      transform: translateY(-.3rem)
      color: $white
      background: $dark-grey
      box-shadow: none
</style>
