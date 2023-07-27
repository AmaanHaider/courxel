
const express = require('express');
const router = express.Router();
const userCourseControllers = require('../../controllers/User/course.controllers');


router.get('/', userCourseControllers.purchasedCourses);

module.exports = router;
