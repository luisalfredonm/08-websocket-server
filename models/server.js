const express = require("express");
var cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {};

    //Middleswares
    this.middlewares();

    //rutas de mi aplicacion
    this.routes();
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

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
