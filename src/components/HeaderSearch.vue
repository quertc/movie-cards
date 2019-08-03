<template>
  <form class="search-form" @submit.prevent="search">
    <input ref="input" class="search-form__input" type="text" v-model.trim="searchQuery"/>
    <button class="search-form__button">
      <i class="fas fa-search"></i>
    </button>
  </form>
</template>

<script>
export default {
  name: 'HeaderSearch',
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    search() {
      if (!this.searchQuery) {
        this.$refs.input.focus();
        return false;
      } else {
        this.$emit('search-movies', this.searchQuery);
        this.searchQuery = '';
      };
    }
  }
}
</script>

<style lang="sass" scoped>
.search-form
  display: grid
  grid-template-columns: 14rem 3rem
  height: 3rem
  border: 1px solid $dark-grey
  border-radius: 4px
  &__input
    border: none
    outline: none
    padding: 5px
    border-radius: 4px 0 0 4px
    color: $dark-grey
  &__button
    border: transparent
    border-left: 1px solid $dark-grey
    border-radius: 0 2px 2px 0
    outline: none
    font-size: 1.3rem
    cursor: pointer
    background: $dark-grey
    color: #fff
</style>
