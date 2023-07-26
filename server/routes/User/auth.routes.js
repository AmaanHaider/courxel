const express = require("express");
const router = express.Router();
const userController = require("../../controllers/User/user.controller");
const validateToken = require("../../middlewares/validateToken");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/userprofile", validateToken, userController.currentUser);

module.exports = router;
