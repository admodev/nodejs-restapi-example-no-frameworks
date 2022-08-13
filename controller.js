const data = require('./data');

class Controller {
	constructor() {
		this.users = data;
	}

	async getUsers() {
		return new Promise((resolve, _) => resolve(this.users));
	}
}
