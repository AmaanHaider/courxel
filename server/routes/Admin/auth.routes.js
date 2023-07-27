const express = require("express");
const router = express.Router();
const adminController = require("../../controllers/Admin/auth.controller");

router.post("/register", adminController.registerAdmin);
router.post("/login", adminController.loginAdmin);
router.get("/adminprofile", adminController.currentAdmin);

module.exports = router;
