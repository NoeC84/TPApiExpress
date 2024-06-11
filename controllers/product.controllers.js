const axios = require('axios');
const Product = require('../models/Product');

exports.test = (req, res) => {
    res.status(200).json({ message: 'lista de productos' });
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos - " + error.message });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: "Producto no encontrado." });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener producto por ID - " + error.message });
    }
};

exports.getProductByName = async (req, res) => {
    try {
        const foundProduct = await Product.findOne({ producto: req.params.name });
        if (foundProduct) {
            res.status(200).json(foundProduct);
        } else {
            res.status(404).json({ error: "Producto no encontrado." });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener producto por nombre - " + error.message });
    }
};

exports.createProduct = async (req, res) => {
    console.log('createProduct');
    try {
        const newProduct = req.body;
        const product = await Product.create(newProduct);
        res.status(201).json({ message: 'Producto creado con éxito', data: product });
    } catch (error) {
        res.status(500).json({ message: "Error al crear producto - " + error.message });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: 'Producto actualizado con éxito', data: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar producto - " + error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Producto eliminado exitosamente', data: deletedProduct });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar producto - " + error.message });
    }
};

exports.unsubscribeProduct = async (req, res) => {
    try {
        const unsubscribedProduct = await Product.findByIdAndUpdate(req.params.id, { active: false }, { new: true });
        res.status(200).json({ message: "Producto retirado", data: unsubscribedProduct });
    } catch (error) {
        res.status(500).json({ message: "Error al dar de baja producto - " + error.message });
    }
};

exports.getJPHProducts = async (req, res) => {
    try {
        const productos = await axios.get("https://fakestoreapi.com/products");
        res.status(200).json({ products: productos.data });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos JPH - " + error.message });
    }
};