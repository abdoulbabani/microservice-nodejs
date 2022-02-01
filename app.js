const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081",
};

// import de la connexion et des differents models de l application et initialisation avant le demarrage du serveur
const db = require("./models/index");
db.Sequelize.sync();
//app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

module.exports = app;
