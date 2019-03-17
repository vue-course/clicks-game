<template>
	<div>
		<p>{{$gameData.step.message}}</p>
		<ul>
			<li v-for="room in $gameData.step.options" :key="room" :style="{backgroundColor: room}" @click="saveRoom(room)">
				{{room}}
			</li>
		</ul>
	</div>
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
