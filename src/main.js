import Vue from 'vue'
import App from './App.vue'
import {Game} from './plugins/game';

Vue.use(Game);

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app');
