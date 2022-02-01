const DbConfig = require("./db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(DbConfig.DB, DbConfig.USER, DbConfig.PASSWORD, {
  host: DbConfig.HOST,
  dialect: DbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: DbConfig.max,
    min: DbConfig.min,
    acquire: DbConfig.acquire,
    idle: DbConfig.idle,
  },
});

module.exports = sequelize;
