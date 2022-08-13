function getRequestData(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = '';
            // Evento que escucha la data enviada por el cliente
            req.on('data', (chunk) => {
                // string del body
                body += chunk.toString();
            });
            // Fin del evento de data
            req.on('end', () => {
                // Enviamos la data
                resolve(body);
            });
        } catch (error) {
            reject(error);
        }
    });
}
module.exports = { getRequestData };
