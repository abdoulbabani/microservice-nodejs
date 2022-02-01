const sequelize = require("sequelize");
const Sequelize = require("../connexion/connexion");
db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require("./userModel.js");
db.role = require("./roleModel.js");
db.user.hasMany(db.role);

module.exports = db;
