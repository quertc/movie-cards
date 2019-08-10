<template>
  <nav class="nav">
    <button class="nav__close-button" @click.prevent="$emit('close-menu')" aria-label="Close">
      <span></span>
      <span></span>
    </button>
    <router-link :to="{ name: 'discover', params: { category: 'popular' }}" class="nav__logo" @click.native="$emit('close-menu')">
      <img src="@/assets/tmdb-logo.svg" alt="TMDb logo" title="The Movie Database">
    </router-link>
    <div class="nav__discover-menu">
      <h4 class="nav__discover-menu-caption">Discover</h4>
      <router-link :to="{ name: 'discover', params: { category: 'popular' }}" class="nav__discover-menu-link" @click.native="$emit('close-menu')">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
        </svg>
        Popular
      </router-link>
      <router-link :to="{ name: 'discover', params: { category: 'top_rated' }}" class="nav__discover-menu-link" @click.native="$emit('close-menu')">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="poll" class="svg-inline--fa fa-poll fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM160 368c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V240c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v128zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V144c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v224zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-64c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v64z"></path>
        </svg>
        Top Rated
      </router-link>
      <router-link :to="{ name: 'discover', params: { category: 'upcoming' }}" class="nav__discover-menu-link" @click.native="$emit('close-menu')">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar" class="svg-inline--fa fa-calendar fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
        </svg>
        Upcoming
      </router-link>
      <h4 class="nav__discover-menu-caption" data-category="genres">Genres</h4>  
      <router-link :to="{ name: 'genres', params: { genre: genre.name.replace(/ /g, '_').toLowerCase() }}" class="nav__discover-menu-link" v-for="genre in allGenresList" :key="genre.id" @click.native="$emit('close-menu')">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-notch" class="svg-inline--fa fa-circle-notch fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"></path>
        </svg>
        {{ genre.name }}
      </router-link>
    </div>
    <div class="nav__copyright">
      Copyright ©
      <a href="https://github.com/quertc" target="_blank" rel="noopener" title="GitHub profile" class="nav__copyright-link">Shkatov</a>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters(['allGenresList']),
  methods: mapActions(['fetchGenresList']),
  mounted() {
    this.fetchGenresList();
  }
}
</script>

<style lang="sass" scoped>
.nav
  position: fixed
  z-index: 1000
  top: 0
  left: -29rem
  height: 100%
  width: 29rem
  display: flex
  flex-flow: column
  background: $dark-grey
  overflow-y: auto
  transition: left 0.6s ease-in-out
  &.nav_active
    left: 0
  &__close-button
    position: absolute
    display: flex
    justify-content: center
    align-items: center
    z-index: 3000
    top: 1rem
    right: 1rem
    background: transparent
    width: 2.3rem
    height: 2.3rem
    cursor: pointer
    span
      width: 100%
      height: 0.4rem
      background: $white
      border-radius: 10px
      position: absolute
      &:first-child
        transform: rotate(45deg)
      &:last-child
        transform: rotate(-45deg)
  &__logo
    color: $green
    text-align: center
    width: 15rem
    margin: 2.5rem auto
    text-decoration: none
  &__discover-menu
    display: flex
    flex-flow: column
    padding: 1.2rem
    &-link
      display: flex
      align-items: center
      padding: 1.25rem 2.4rem
      margin: 0.4rem 0.6rem
      font-size: 1.2rem
      text-decoration: none
      letter-spacing: 1px
      line-height: 1
      border: 1px solid transparent
      border-radius: 20px
      color: lighten($dark-grey, 35%)
      transition: all 0.3s
      &.router-link-active
        border: 1px solid $white
        color: $white
      &:not([class*="router-link-active"]):hover
        border: 1px solid lighten($dark-grey, 35%)
      svg
        width: 1.3rem
        margin-right: 0.9rem
    &-caption
      color: $white
      font-weight: 600
      font-size: 1.2rem
      text-transform: uppercase
      letter-spacing: -0.3px
      margin: 0 0 0.8rem 2rem
      &[data-category="genres"]
        margin-top: 4rem
  &__copyright
    padding: 1rem 0 1.2rem 2rem
    color: lighten($dark-grey, 75%)
    font-size: 1.15rem
    letter-spacing: 0.5px
    &-link
      color: lighten($dark-grey, 75%)
      text-decoration: none
      margin-left: 4px
      font-weight: 600
</style>
