import io from 'socket.io-client';
import Vue from 'vue';


export class Game {
	static install(vue) {
		const game = new Game();
		vue.prototype.$game = game;
		vue.prototype.$gameData = game.__$;
	}

	socket = io('https://clicks-game-back.herokuapp.com');

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
			winner: {},
			ranks: []
		}
	});

	constructor() {
		this._subscribeToAll();
		this._setPermittedActions();
		this.emit('register', localStorage.getItem('access_token'));

		setInterval(() => this.ping(), 2000);
	}

	_subscribeToAll() {
		this._subscribe('user', user => {
			this.user = user;
			this.whatsNext();
		});
		this._subscribe('currentStep', step => this.__$.step = step);
		this._subscribe('ranksUpdated', ranks => this.__$.ranks = ranks);
		this._subscribe('lastWinner', winner => this.__$.winner = winner);
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

	emit(eventName, data) {
		this.socket.emit(eventName, JSON.stringify(data));
	}

	_setPermittedActions() {
		this.__$.whatsNext = () => this.whatsNext();
		this.__$.updateNickname = (name) => this.updateNickname(name);
		this.__$.updateRoom = (room) => this.updateRoom(room);
		this.__$.click = (room) => this.click(room);
	}

	_subscribe(eventName, cb) {
		this.socket.on(eventName, (data) => {
			cb(JSON.parse(data));
		});
	}

}