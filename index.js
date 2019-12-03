'use strict'

const mongoose = require ('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

// Conectamos node con la base de datos de mongo.
mongoose.connect('mongodb://localhost:27017/blog',{ useNewUrlParser: true})
    .then(() => {
        console.log('Conectado con la base de datos de MongoDB');
    });