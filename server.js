//SERVER
//Aquí se configurará el server

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//----------------------------------
//  Configuración Global de Rutas
//----------------------------------

app.use(require('./server/routes/index.route'));

//----------------------
//  Conexión a la BDD
//----------------------

mongoose.connect('mongodb+srv://admin:123456.a@cluster0-l7zwq.mongodb.net/melichallengemutants', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }, (err, res) => {
    if (err) {
        throw err;
    }

    console.log('Base de datos ONLINE');
});


//-------------------------
//  Conexión al servidor
//------------------------- 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Escuchando al puerto: ', PORT);
})