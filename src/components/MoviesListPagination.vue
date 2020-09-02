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
    padding: 0.9rem 1.1rem
    background: $white
    border: 0.1rem solid $dark-grey
    text-align: center
    cursor: pointer
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.15)
    transition: all 0.3s ease-in-out
    &:hover
      background: $dark-grey
      color: $white
      transform: translateY(-0.3rem)
      box-shadow: none
</style>
