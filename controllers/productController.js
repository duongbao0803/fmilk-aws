const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const Product = require("../models/product");
const Post = require("../models/post");
const User = require("../models/user");
const Brand = require("../models/brand");
const Fuse = require("fuse.js");
const {
  getAsync,
  setexAsync,
  delAsync,
  keysAsync,
} = require("../config/redis");

const productController = {};

module.exports = productController;
