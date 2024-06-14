const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const orderController = require('../controllers/order.controllers');
const validate = require('../middlewares/validate');
const authenticate = require('../middlewares/authMiddleware');

router.get('/', authenticate, orderController.getOrders);


router.get('/:id', authenticate, orderController.getOrderById);


router.post('/', authenticate, [
    body('product').notEmpty().withMessage('El producto es requerido'),
    body('quantity').isInt({ min: 1 }).withMessage('La cantidad debe ser un número entero positivo'),
    body('user').notEmpty().withMessage('El usuario es requerido'),
    validate
], orderController.createOrder);


router.put('/:id', authenticate, [
    body('product').optional().notEmpty().withMessage('El producto es requerido'),
    body('quantity').optional().isInt({ min: 1 }).withMessage('La cantidad debe ser un número entero positivo'),
    body('user').optional().notEmpty().withMessage('El usuario es requerido'),
    validate
], orderController.updateOrder);


router.delete('/:id', authenticate, orderController.deleteOrder);

module.exports = router;