const express = require('express');
const router = express.Router();

const productController = require("../controllers/product.controllers");
const validate = require("../middlewares/validate");



router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.get("/jphProducts", productController.getJPHProducts);

router.post("/create", validate, productController.createProduct);
router.put("/:id", validate, productController.updateProduct);

router.delete("/:id", productController.unsubscribeProduct);
router.delete("/delete/:id", productController.deleteProduct);

module.exports = router;