<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
		<NicknameForm v-if="step.name === 'nickname'"/>
		<p v-else-if="step.name === 'room'">{{step.message}}</p>
		<p v-else-if="step.name === 'play'">{{step.message}}</p>
	</div>
</template>

<script>
	import NicknameForm from './components/NicknameForm';

	export default {
		name: 'app',
		components: {
			NicknameForm
		},
		computed: {
			step() {
				return this.$gameData.step;
			}
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
