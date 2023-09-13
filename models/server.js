const express = require("express");
var cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = require('http').createServer(this.app);
    this.io = require('socket.io')(this.server);


    this.paths = {};

    //Middleswares
    this.middlewares();

    //rutas de mi aplicacion
    this.routes();

    this.sockets();
  }

  //Middlewares
  middlewares() {
    //Cors

    this.app.use(cors());

    //directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    // this.app.use(this.paths.auth, require("../routes/auth"));
  }

  //Sockets implemtacion de soc

  sockets() {
    this.io.on('connection', socket => {
      console.log('Cliente conectado', socket.id);

      socket.on('disconnect',() => {
        console.log('Cliente desconectado', socket.id)
      })
    })
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
