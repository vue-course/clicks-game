<template>
	<form @submit.prevent="saveName">
		<p>{{$gameData.step.message}}</p>
		<input type="text" v-model="name" :placeholder="$gameData.step.message" />
	</form>
</template>

<script>
	export default {
		name: 'NicknameForm',
		data() {
			return {name: ''};
		},
		methods: {
			saveName() {
				this.$game.updateNickname(this.name);
			}
		}
	}
</script>

<style lang="scss" scoped>
	input {
		padding: 10px;
		border-radius: 5px;
		border: 1px solid #ddd;
		width: 90%;
	}
</style>
