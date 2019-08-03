<template>
  <div id="app">
		<TheHeader/>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
	components: {
		TheHeader
	}
}
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
	font-family: Montserrat, sans-serif
	font-size: 16px
	line-height: 1.6
	font-weight: 400
</style>
