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
			ranks: {},
			winners: {},
		}
	});

	constructor() {
		this._subscribeToAll();
		this.emit('register', localStorage.getItem('access_token'));
		this.emit('allRooms');

		setInterval(() => this.ping(), 2000);
	}

	_subscribeToAll() {
		this._subscribe('user', user => {
			this.user = user;
			this.whatsNext();
		});
		this._subscribe('ranksUpdated:all', ranks => this.__$.ranks = {...this.__$.ranks, ...ranks});
		this._subscribe('lastWinner:all', winners => this.__$.winners = {...this.__$.winners, ...winners});
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

	_subscribe(eventName, cb) {
		this.socket.on(eventName, (data) => {
			cb(JSON.parse(data));
		});
	}

}