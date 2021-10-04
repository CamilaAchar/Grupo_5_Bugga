const express = require('express');
const app = express();

const path = require('path');
const publicPath = path.join(__dirname, './public'); 
app.use(express.static(publicPath));

app.listen(3080, ()=> console.log('Servidor OK - Bugga - 3080'));

app.get('/', (req,res)=>res.sendFile(path.join(__dirname, './views/login.html')));
app.get('/home', (req,res)=>res.sendFile(path.join(__dirname, './views/registro.html')));