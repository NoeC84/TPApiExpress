const express = require('express');
const router = express.Router();
const { body } = require('express-validator');


const productController = require("../controllers/product.controllers");
const validate = require("../middlewares/validate");
const authenticate = require('../middlewares/authMiddleware'); 
const { registerUser } = require('../controllers/authController');

router.get("/products_db", authenticate, productController.getProducts);
router.get("/products_api", authenticate, productController.getJPHProducts);

router.post("/create", authenticate, [
    body("producto").notEmpty().withMessage("El nombre del producto es requerido"),
    body("material").notEmpty().withMessage("El material es requerido"),
    body("seccion").notEmpty().withMessage("La sección es requerida"),
    validate
], productController.createProduct);

router.put("/:id", authenticate, [
    body("producto").optional().notEmpty().withMessage("El nombre del producto es requerido"),
    body("material").optional().notEmpty().withMessage("El material es requerido"),
    body("seccion").optional().notEmpty().withMessage("La sección es requerida"),
    validate
], productController.updateProduct);

router.post("/register", [
    body("email").isEmail().withMessage("El correo electrónico debe ser válido"),
    body("password").isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres")
], validate, registerUser);

router.delete("/:id", authenticate, productController.unsubscribeProduct);
router.delete("/delete/:id", authenticate, productController.deleteProduct);

module.exports = router;