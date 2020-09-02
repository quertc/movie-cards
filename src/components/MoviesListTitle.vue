<template>
  <h1 class="title">
    {{ title | toUpperCase }}
    <span class="title__subtitile">{{ subtitle }}</span>
  </h1>
</template>

<script>
export default {
  filters: {
    toUpperCase(value) {
      if (!value) return '';

      return value.replace(/_/g, ' ').toUpperCase();
    },
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
.title
  display: flex
  flex-flow: column
  font-weight: 300
  font-size: 2.35rem
  color: $dark-grey
  line-height: 1.2
  &__subtitile
    font-weight: 600
    font-size: 1.25rem
    color: lighten($dark-grey, 6%)
    text-transform: uppercase
</style>
