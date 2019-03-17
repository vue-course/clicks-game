<template>
	<div>
		<p>{{$gameData.step.message}}</p>
		<button @click="click"
		:style="{backgroundColor: $gameData.user.room}">CLICK!!!!</button>
	</div>
</template>

<script>
	export default {
		name: 'Clicker',
		methods: {
			click() {
				this.$game.click();
			}
		}
	}
</script>

<style lang="scss" scoped>
	button {
		width: 90%;
		padding: 50px 0;
	}
</style>
