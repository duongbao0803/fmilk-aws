const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../models/user");
const Product = require("../models/product");
const Post = require("../models/post");
const Brand = require("../models/brand");
const Order = require("../models/order");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://baodtse171065:duongtonbaomx1@cluster0.qzvsx5g.mongodb.net/"
    );
    console.log("Connect to MongoDB");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
