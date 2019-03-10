<template>
	<div>
		<p>{{$game.step.message}}</p>
		<h1>Last Round Winner: {{$game.winner.name}}</h1>
		<button @click="click"
		:style="{backgroundColor: $game.user.room}">CLICK!!!!</button>

		<div v-for="(row, index) in $game.ranks" :key="index">
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
