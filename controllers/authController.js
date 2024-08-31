const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const uuid = require("uuid");
const User = require("../models/user");
const { getAsync, setexAsync } = require("../config/redis");

dotenv.config();

let refreshTokens = [];
const authController = {};

module.exports = authController;
