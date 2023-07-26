const express = require("express");
const { getCourseByUserId } = require("../controllers/mycourse.controller");
const router = express.Router();

router.get("/",getCourseByUserId );
module.exports = router;
