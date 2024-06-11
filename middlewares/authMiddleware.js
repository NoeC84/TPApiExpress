
const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';

const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado. No se proporcionó token.' });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded; 
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Acceso denegado. Token no válido.' });
    }
};

module.exports = authenticate;