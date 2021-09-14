const express = require('express')
const cors = require('cors'); //seguridad

class Server {

    constructor() {

        this.app = express();
        this.routes();

        //Middleweares: funciones que se ejecutan cuando inicio el sv
        this.middlewares();
        //Rutas de mi app

        this.port = process.env.PORT;
    }

    middlewares() { //app.use quiere decir que es un middleware

        //cors
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use('/api/usuarios', require('../routes/usuarios'));
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);    
        });
    }
}



module.exports = Server;
