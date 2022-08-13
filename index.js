const http = require('http');
const User = require('./controller');
const { getRequestData } = require('./utils');
const PORT = process.env.PORT || 8400;

const server = http.createServer(async (req, res) => {
	// Seteamos la url de la request
	if (req.url === '/api/users' && req.method === 'GET') {
		const users = await new User().getUsers();

		// Seteamos los headers
		res.writeHead(200, { 'Content-Type': 'application/json' });

		// Aca seteamos y finalizamos la respuesta
		res.end(JSON.stringify(users));
	} else {
		// Si no matchea con una ruta existente respondemos con un 404
		res.writeHead(404, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({ message: 'Ruta no encontrada.' }));
	}

	// TODO: Agregar las demas rutas con sus condicionales correspondientes
});

server.listen(PORT, () => {
	console.log(`El servidor se esta ejecutando en el puerto: ${PORT}`);
});
