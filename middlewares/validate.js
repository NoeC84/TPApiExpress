const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        const extractedErrors = [];

        errores.array().map(error => extractedErrors.push({ [error.param]: error.msg }));

        return res.status(400).json({ message: 'Error de validación.', errors: extractedErrors });
    } else {
        next();
    }
};

module.exports = validate;