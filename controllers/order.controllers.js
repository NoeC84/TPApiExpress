const Order = require('../models/Order');


exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener órdenes - ' + error.message });
    }
};


exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Orden no encontrada' });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener orden - ' + error.message });
    }
};


exports.createOrder = async (req, res) => {
    const { product, quantity, user } = req.body;
    try {
        const newOrder = new Order({ product, quantity, user });
        await newOrder.save();
        res.status(201).json({ message: 'Orden creada con éxito', data: newOrder });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear orden - ' + error.message });
    }
};


exports.updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Orden no encontrada' });
        }
        res.status(200).json({ message: 'Orden actualizada con éxito', data: updatedOrder });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar orden - ' + error.message });
    }
};


exports.deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({ message: 'Orden no encontrada' });
        }
        res.status(200).json({ message: 'Orden eliminada con éxito', data: deletedOrder });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar orden - ' + error.message });
    }
};