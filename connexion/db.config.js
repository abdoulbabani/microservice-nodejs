const mysql = require("mysql2");
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "sequelise",
  dialect: "mysql",

  pool: {
    max: 5,

    min: 0,

    acquire: 30000,

    idle: 10000,
  },
};
