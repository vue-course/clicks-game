import io from 'socket.io-client';
import Vue from 'vue';


export class Game {
	static install(vue) {
		const game = new Game();
		vue.prototype.$game = game.__$;
	}

	socket = io('//:3000');

	get user() {
		return this.__$.user;
	}

	set user(user) {
		this.__$.user = user;
		localStorage.setItem('access_token', user.token);
	}

	__$ = new Vue({
		data: {
			user: {},
			step: {},
			ranks: []
		}
	});

	constructor() {
		this.subscribeToAll();
		this.setPermittedActions();
		this.emit('register', localStorage.getItem('access_token'));

		setInterval(() => this.ping(), 2000);
	}

	subscribeToAll() {
		this.subscribe('user', user => {
			this.user = user;
			this.whatsNext();
		});
		this.subscribe('currentStep', step => this.__$.step = step);
		this.subscribe('ranksUpdated', ranks => this.__$.ranks = ranks);
	}

	setPermittedActions() {
		this.__$.whatsNext = () => this.whatsNext();
		this.__$.updateNickname = (name) => this.updateNickname(name);
		this.__$.updateRoom = (room) => this.updateRoom(room);
		this.__$.click = (room) => this.click(room);
	}

	ping() {
		this.emit('ping', null);
	}

	whatsNext() {
		this.emit('whatsNext', null);
	}

	updateNickname(name) {
		this.emit('updateNickname', name);
	}

	updateRoom(room) {
		this.emit('updateRoom', room);
	}

	click() {
		this.emit('clicked', null);
	}

	subscribe(eventName, cb) {
		this.socket.on(eventName, (data) => {
			cb(JSON.parse(data));
		});
	}

	emit(eventName, data) {
		this.socket.emit(eventName, JSON.stringify(data));
	}

}