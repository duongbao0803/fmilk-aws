const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const Post = require("../models/post");
const {
  getAsync,
  setexAsync,
  keysAsync,
  delAsync,
} = require("../config/redis");

const postController = {};

module.exports = postController;
