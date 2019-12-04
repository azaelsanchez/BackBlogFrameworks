'use strict'

//Cargaremos modulos de node para crear el servidor
const express = require('express');
const bodyParser = require('body-parser');

//Ejecutamos express (http)
const app = express();

//Cargamos ficheros rutas


//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//Activamos el CORS

//Añadimos prefijos a rutas

//Ruta de pruba para el API
// app.get('/creador', (req, res) =>{
//     console.log("Hola mundo");

//     return res.status(200).send({
//         resultado: 'Blog Frameworks',
//         autor: 'Azael Sánchez',
//         url: 'azaelsanchez.com'
//     });
// });

//Exportamos el modulo

module.exports = app;