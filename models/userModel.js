const sequelize = require("sequelize");
const Sequelize = require("../connexion/connexion");

const User = Sequelize.define("users", {
  iduser: {
    type: sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
  },
  adresse: {
    type: sequelize.DataTypes.STRING,
  },
  telephone: {
    type: sequelize.DataTypes.TEXT,
  },
  city: {
    type: sequelize.DataTypes.STRING,
  },
  state: {
    type: sequelize.DataTypes.STRING,
  },
  firsname: {
    type: sequelize.DataTypes.STRING,
  },
  lastname: {
    type: sequelize.DataTypes.STRING,
  },
});
module.exports = User;
