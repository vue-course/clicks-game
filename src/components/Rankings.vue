<template>
	<div class="rankings" :style="{backgroundColor: room}">
		<h2 class="winner">Last winner for '{{room}}' room: <strong>{{winner.name || '(not yet)'}}</strong></h2>
		<h2>Live Ranks List:</h2>
		<p v-if="!ranks.length">Join the room!</p>
		<div v-for="(row, index) in ranks" :key="index" class="rank">
			{{row.name}} : {{row.clicks}}
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			room: String,
		},
		computed: {
			winner() {
				return this.$gameData.winners[this.room] || {};
			},
			ranks() {
				return this.$gameData.ranks[this.room] || [];
			}
		},
		name: 'Rankings',
	}
</script>

<style scoped>
	h2 {
		color: #fff;
	}
	.winner {
		font-size: 300%;
		font-weight: normal;
	}
	p {
		font-size: 400%;
	}
	.rankings {
		flex: 0 50%;
		overflow: hidden;
	}
	.rank {
		font-size: 200%;
	}
</style>