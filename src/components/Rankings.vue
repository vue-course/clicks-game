<template>
	<div class="rankings" :style="{backgroundColor: room}">
		<h2>Last winner for '{{room}}' room: {{winner.name || '(not yet)'}}</h2>
		<h2>Live Ranks List:</h2>
		<p v-if="!ranks.length">Join the room!</p>
		<div v-for="(row, index) in ranks" :key="index">
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
	p {
		font-size: 400%;
	}
	.rankings {
		flex: 0 50%;
		overflow: hidden;
	}
</style>