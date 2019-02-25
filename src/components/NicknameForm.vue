<template>
	<form @submit.prevent="saveName">
		<p>{{$gameData.step.message}}</p>
		<input type="text" v-model="name" :placeholder="$gameData.step.message" />
	</form>
</template>

<script>
	export default {
		name: 'RoomSelector',
		methods: {
			saveRoom(room) {
				this.$game.updateRoom(room);
			}
		}
	}
</script>

<style lang="scss" scoped>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		align-content: space-between;

		li {
			flex-grow: 2;
			text-align: center;
			padding: 50px 0;
			cursor: pointer;
		}
	}
</style>
