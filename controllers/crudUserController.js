const db = require("../models/index");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const decode = require("jwt-decode");
require("dotenv").config();

const User = db.user;
const Role = db.role;

//addUser
const addUser = async (req, res) => {
  let info = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    published: req.body.published ? req.body.published : false,
  };

  let userr = await User.create(info);
  userr.createRole();
  res.status(200).send(userr);
};

// getAllUsers
const getAllUsers = async (req, res) => {
  let users = await User.findAll();
  res.status(200).send(users);
};

//getOneUser
const getOneUser = async (req, res) => {
  let id = req.params.id;
  let user = await User.findOne({ where: { iduser: id } });
  res.status(200).send(user);
};

//UpdatUser

const UpdateUser = async (req, res) => {
  let id = req.params.id;
  let user = await User.update(req.body, { where: { iduser: id } });
  res.status(200).send(user);
};

//deleteUser

const deleteUser = async (req, res) => {
  let id = req.params.id;
  await User.destroy({ where: { iduser: id } });
  res.status(200).send("user is deleted!");
};

//signin
const signin = async (req, res) => {
  let password = req.body.password;
  let email = req.body.email;

  let user = await User.findOne({
    where: {
      [Op.and]: [{ password: password }, { email: email }],
    },
  });
  const role = await Role.findOne({ where: { idroles: user.iduser } });
  const token = jwt.sign(
    { iduser: user.iduser, role: role.role },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );

  res.status(200).json({ access_token: token });
};
//refrechtoken
const refrechtoken = async (req, res) => {
  const role = req.body.role;
  const iduser = req.body.iduser;
  const refrech_token = jwt.sign(
    { iduser: iduser, role: role },
    process.env.REFRECH_TOKEN_SECRET,
    {
      expiresIn: "1h",
    }
  );
  res.status(200).json(refrech_token);
};
module.exports = {
  getAllUsers,
  getOneUser,
  UpdateUser,
  deleteUser,
  addUser,
  signin,
  refrechtoken,
};
