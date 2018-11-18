// requires
const express = require('express');
const mongoose = require('mongoose');

// inicializar variables
const app = express();

// importar rutas
const appRoutes = require('./routes/app');
const usuarioRoutes = require('./routes/usuario');

// conexion a la base de datos
mongoose.connect('mongodb://localhost/hospitalDB', {
    useNewUrlParser: true
}, (err, res) => {
    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online.');
});

// rutas
app.use('/usuario', usuarioRoutes);
app.use('/', appRoutes);

// escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online.');
});