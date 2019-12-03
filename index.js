'use strict'

const mongoose = require ('mongoose');
const app = require('./app');
const port = 3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

// Conectamos node con la base de datos de mongo.
mongoose.connect('mongodb://localhost:27017/blog',{ useNewUrlParser: true})
    .then(() => {
        console.log('Conectado con la base de datos de MongoDB');
        //Creamos el servidor y ponerme a escuchar peticiones HTTP
        app.listen(port, () =>{
            console.log('Servidor funcionando en http://localhost:'+port )
        })
    });