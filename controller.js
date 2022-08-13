const data = require('./data');

class Controller {
	constructor() {
		this.users = data;
	}

	async getUsers() {
		return new Promise((resolve, _) => resolve(this.users));
	}

	async getUser(id) {
		return new Promise((resolve, reject) =>{
			let user = this.users.find((user) => user.id === parseInt(id));

			if (!user) {
				reject(`No se encontro ningun usuario con id ${id}`);
			}

			console.log(`Usuario con id ${id} encontrado!`);

			resolve(user);
		});
	}

	async createUser(user) {
		return new Promise((resolve, _) => {
			let newUser = {
				id: Math.floor(8 + Math.random() *100),
				...user
			};

			resolve(user);
		});
	}

	async updateUser(id, key, value) {
		return new Promise((resolve, reject) => {
			let user = this.users.find((user) => user.id === parseInt(id));

			if (!user) {
				reject(`No se encontro un usuario con id ${id}`);
			}

			user[key] = value;

			resolve(user);
		});
	}

	async deleteUser(id) {
		return new Promise((resolve, reject) => {
			// Aca podemos usar un map para facilitarnos las cosas
			let user = array.map(usr => usr.id).indexOf(id);

			if (!user) {
				reject(`No se encontro un usuario con id ${id}`);
			}

			// la tilde ~ es un Bitwise Not Operator
			~user && array.splice(user, id);
		});
	}
}

module.exports = Controller;
