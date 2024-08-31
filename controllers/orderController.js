const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const moment = require("moment");
let config = require("config");
const crypto = require("crypto");
const querystring = require("qs");
const Order = require("../models/order");
const User = require("../models/user");
const Product = require("../models/product");
const sortObject = require("../utils/format");
const {
  getAsync,
  setexAsync,
  delAsync,
  keysAsync,
} = require("../config/redis");

const orderController = {};

module.exports = orderController;
