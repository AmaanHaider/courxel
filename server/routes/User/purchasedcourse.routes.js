
const express = require('express');
const router = express.Router();
const userCourseControllers = require('../../controllers/User/course.controllers');


router.get('/', userCourseControllers.purchasedCourses);
router.get('/:id', userCourseControllers.purchasedCourseDetailById);


module.exports = router;
