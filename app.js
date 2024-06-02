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

app.use('/products', productRouter); 

app.get('/jphProducts', (req, res) => {
    console.log(res);
    const data = req;
    res.json(data)
})

dbConnect();

app.listen(PORT, ()=>{
    console.log(`Aplicación escuchando en puerto ${PORT}. Acceda a: http://localhost:${PORT}`); 
})