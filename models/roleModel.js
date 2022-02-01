const sequelise = require("sequelize");
const Sequelize = require("../connexion/connexion");

const Role = Sequelize.define("roles", {
  idroles: {
    type: sequelise.DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  role: {
    type: sequelise.DataTypes.STRING,
    defaultValue: "user",
  },
});

module.exports = Role;
