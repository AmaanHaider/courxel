const express = require("express");
const router = express.Router();
const publicCourseControllers = require('../../controllers/Public/course.controllers')


router.get("/",publicCourseControllers.getCourseByUserId );
module.exports = router;
