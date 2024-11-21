const express = require('express');
const dp = require('../app/rutas/rutadp');
const app = express();
const db = require('../app/conexion/database');
app.use(express.json());
app.get('/home', function(req, res){
    res.send('Hello, World!');
})
app.use('/home',dp )

module.exports = app
