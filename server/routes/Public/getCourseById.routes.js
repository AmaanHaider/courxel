const express = require("express");
const router = express.Router();
const publicCourseControllers = require('../../controllers/Public/course.controllers')

router.get("/:id",publicCourseControllers.getCourseById );
module.exports = router;
