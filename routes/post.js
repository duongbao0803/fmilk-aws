const authController = require("../controllers/authController");
const postController = require("../controllers/postController");
const middlewareController = require("../middleware/verifyToken");

const router = require("express").Router();

module.exports = router;
