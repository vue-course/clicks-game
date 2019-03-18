<template>
	<div class="rankings">
		<h2>Room Live Ranks List</h2>
		<div v-for="(row, index) in $gameData.ranks" :key="index">
			{{row.name}} : {{row.clicks}}
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Rankings',
	}
</script>

<style scoped>
	h2 {
		color: #00bc7e;
	}
</style>