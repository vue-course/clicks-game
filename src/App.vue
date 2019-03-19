<template>
	<div id="app">
		<Rankings v-for="room in rooms" :key="room" :room="room" />
	</div>
</template>

<script>
	import Rankings from './components/Rankings';

	export default {
		name: 'app',
		data() {
			return {rooms: ['red', 'green', 'orange', 'pink']};
		},
		components: {
			Rankings,
		},
	}
</script>

<style lang="scss">
	html, body {
		height: 100%;
		margin: 0;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		display: flex;
		flex-wrap: wrap;
	}
</style>
