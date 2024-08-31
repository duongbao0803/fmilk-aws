const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const Brand = require("../models/brand");
const Product = require("../models/product");
const {
  getAsync,
  setexAsync,
  delAsync,
  keysAsync,
} = require("../config/redis");

const brandController = {};

module.exports = brandController;
