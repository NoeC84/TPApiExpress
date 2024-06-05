const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

const productRouter = require('./routes/productRoutes'); 
const dbConnect = require('./database/dbConnect');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("<h2>Te damos la Bienvenida al lugar donde vas a encontrar todo lo que necesites para tu hogar.</h2>"); 
})

app.get('/products_api', productRouter);

app.get('/products_db', productRouter);
app.delete('/delete/:id', productRouter);
app.post('/create', productRouter)

dbConnect();

app.listen(PORT, () => {
    console.log(`Aplicación escuchando en puerto ${PORT}. Acceda a: http://localhost:${PORT}`);
});