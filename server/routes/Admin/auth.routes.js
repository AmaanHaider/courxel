const express = require("express");
const router = express.Router();
const adminController = require("../../controllers/Admin/auth.controller");
const validateToken = require("../../middlewares/validateToken");

router.post("/register", adminController.registerAdmin);
router.post("/login", adminController.loginAdmin);
router.get("/adminprofile", validateToken, adminController.currentAdmin);

module.exports = router;
