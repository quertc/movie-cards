<template>
  <form
    class="search-form"
    @submit.prevent="search"
  >
    <input
      ref="input"
      v-model.trim="searchQuery"
      placeholder="Search..."
      class="search-form__input"
      type="text"
    >
    <button class="search-form__button">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="search"
        class="svg-inline--fa fa-search fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
        />
      </svg>
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    search() {
      if (!this.searchQuery) {
        this.$refs.input.focus();

        return;
      }

      this.$router.push({ name: 'search', params: { query: this.searchQuery } });
      this.searchQuery = '';
    },
  },
};
</script>

<style lang="sass" scoped>
.search-form
  display: flex
  height: 3.6rem
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.15)
  background: $dark-grey
  border-radius: 0.7rem
  &__input
    padding: 1rem
    background: transparent
    border-radius: 0.7rem
    color: $white
    border: none
    outline: none
  &__button
    display: flex
    align-content: center
    padding: 0 1rem
    cursor: pointer
    background: transparent
    .fa-search
      width: 1.5rem
      margin: auto
      color: lighten($dark-grey, 75%)
</style>
