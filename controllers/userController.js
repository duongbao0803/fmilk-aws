const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const bcrypt = require("bcrypt");
const User = require("../models/user");
const {
  getAsync,
  setexAsync,
  delAsync,
  keysAsync,
} = require("../config/redis");

const userController = {};

module.exports = userController;
