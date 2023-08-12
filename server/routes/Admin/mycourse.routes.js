const express = require("express");
const router = express.Router();
const myCourseController = require('../../controllers/Admin/course.controller')


router.get("/", myCourseController.getCourseByUserId );
router.get("/:id", myCourseController.getCourseById );

module.exports = router;
