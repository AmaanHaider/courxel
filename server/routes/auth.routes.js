const express = require("express");
const router = express.Router();
const userController = require("../controllers/auth.controller");
const validateToken = require("../middlewares/validateToken");

router.get("/profile", validateToken, userController.currentUser);

router.post("/register", userController.registerUser);

router.post("/login", userController.loginUser);

module.exports = router;
