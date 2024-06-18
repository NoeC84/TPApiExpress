function apiKeyMiddleware(req, res, next) {
    const apiKey = req.headers['x-api-key'];

    if (apiKey && apiKey === process.env.API_KEY) {
        next(); 
    } else {
        res.status(401).send('Clave API inválida');
    }
}

module.exports = apiKeyMiddleware;