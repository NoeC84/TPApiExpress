const express = require('express');
const dotenv = require('dotenv');
const apiKeyMiddleware = require('./middlewares/apiKeyMiddleware');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const orderRouter = require('./routes/orderRoutes');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(apiKeyMiddleware); 

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.listen(PORT, () => {
    console.log(`Aplicación escuchando en puerto ${PORT}. Acceda a: http://localhost:${PORT}`);
});