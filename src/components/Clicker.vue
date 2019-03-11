<template>
	<div>
		<p>{{$gameData.step.message}}</p>
		<h1>Last Round Winner: {{$gameData.winner.name}}</h1>
		<button @click="click"
		:style="{backgroundColor: $gameData.user.room}">CLICK!!!!</button>

		<div v-for="(row, index) in $gameData.ranks" :key="index">
			{{row.name}} : {{row.clicks}}
		</div>
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
