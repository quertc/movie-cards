<template>
  <div id="app">
    <LoaderLayout :loading="isLoading" />
    <TheHeader />
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view :key="$route.fullPath" />
    </transition>
  </div>
</template>

<script>
import LoaderLayout from '@/components/LoaderLayout.vue';
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    LoaderLayout,
    TheHeader,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>

<style lang="sass">
*
  box-sizing: border-box
  margin: 0
  padding: 0
  &:before, &:after
    box-sizing: border-box

html
  font-size: 62.5%

body
  font: 1.6rem/1.6 Montserrat, sans-serif

button
  outline: none
  border: none
  &:focus, &:active, &::-moz-focus-inner
    outline: none
    border: none

a
  outline: none
  border: none
  &:focus, &:active, &::-moz-focus-inner
    outline: none
    border: none

.fade-enter-active, .fade-leave-active
  transition: opacity 0.5s

.fade-enter, .fade-leave-to
  opacity: 0
</style>
