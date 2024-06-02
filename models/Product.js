const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    producto: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    seccion: {
        type: String,
        required: true
    },
    imageUrl: String,
    role: {
        type: String,
        enum: ['ADMIN', 'USER']
    },
    active: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });

const Product = model('Product', productSchema);

module.exports = Product;