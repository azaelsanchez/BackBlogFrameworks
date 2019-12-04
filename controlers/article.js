'use strict'

const controller = {

    datosBlog: (req, res) => {
        console.log("Hola mundo");
    
        return res.status(200).send({
            resultado: 'Blog Frameworks',
            autor: 'Azael Sánchez',
            url: 'azaelsanchez.com'
        });
    },
    test: (req,res) => {
        return res.status(200).send({
            message: 'Soy la accion test del controlador de articulos'
        });
    }
}; // fin del controlador

module.exports = controller;

