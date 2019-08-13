<template>
  <h1 class="title">
    {{ title | toUpperCase }}
    <span class="title__subtitile">{{ subtitle }}</span>
  </h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  },
  filters: {
    toUpperCase(value) {
      if (!value) return '';
      value = value.toString();
      return value.replace(/_/g, ' ').toUpperCase();
    }
  }
}
</script>

<style lang="sass" scoped>
.title
  display: flex
  flex-direction: column
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