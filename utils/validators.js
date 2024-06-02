const { body } = require('express-validator');

exports.username = body('username')
    .notEmpty()
    .withMessage('El nombre de usuario es obligatorio.')
    .isLength({ min: 4, max: 12 })
    .withMessage('La longitud del nombre de usuario debe ser entre 4 y 12 caracteres');

exports.email = body('email')
    .notEmpty()
    .withMessage('El email es obligatorio')
    .isEmail()
    .withMessage('El email proporcionado debe ser válido');

exports.password = body('password')
    .notEmpty()
    .withMessage('Debe colocar una contraseña válida.')
    .isStrongPassword({ minLength: 6, minLowercase: 1, minUppercase: 1, minSymbols: 0 })

    .withMessage('El password debe tener un minimo de 6 caracteres, una minuscula, una mayuscula y un numero.');
