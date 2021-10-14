const express = require('express');
const app = express();

const path = require('path');
const publicPath = path.join(__dirname, './public'); 
app.use(express.static(publicPath));

app.listen(3080, ()=> console.log('Servidor OK - Bugga - 3080'));

app.get('/', (req,res)=>res.sendFile(path.join(__dirname, './views/login.html')));
app.get('/login', (req,res)=>res.sendFile(path.join(__dirname, './views/registro.html')));
app.get('/detalleDelProducto', (req,res)=>res.sendFile(path.join(__dirname, './views/productDetail.html')));   
app.get('/home', (req,res)=>res.sendFile(path.join(__dirname, './views/home.html'))); 
app.get('/productos', (req,res)=>res.sendFile(path.join(__dirname, './views/productos.html'))); 
