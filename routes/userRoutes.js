const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const authController = require('../controllers/authController');
const validate = require('../middlewares/validate');
const authenticate = require('../middlewares/authMiddleware');




router.post('/register', [
    body('username').notEmpty().withMessage('El nombre de usuario es obligatorio.'),
    body('email').isEmail().withMessage('El correo electrónico debe ser válido.'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.')
], validate, authController.registerUser);


router.post('/login', [
    body('email').isEmail().withMessage('El correo electrónico debe ser válido.'),
    body('password').notEmpty().withMessage('Debe proporcionar una contraseña.')
], validate, authController.loginUser);

module.exports = router;