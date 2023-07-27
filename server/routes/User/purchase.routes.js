const express = require('express');
const router = express.Router();
const userCourseControllers = require('../../controllers/User/course.controllers');



router.post('/:id', userCourseControllers.purchaseCourseById);

module.exports = router;