const http = require('http');
const PORT = process.env.PORT || 8400;

const server = http.createServer(async (req, res) => {
	// Seteamos la url de la request
	if (req.url === '/api' && req.method === 'GET') {
		// Seteamos los headers
		res.writeHead(200, { 'Content-Type': 'application/json' });

		// Seteamos la response
		res.write('Hola, Wayni!');

		// Y aca finalizamos la respuesta
		res.end();
	} else {
		// Si no matchea con una ruta existente respondemos con un 404
		res.writeHead(404, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({ message: 'Ruta no encontrada.' }));
	}
});

server.listen(PORT, () => {
	console.log(`El servidor se esta ejecutando en el puerto: ${PORT}`);
});
