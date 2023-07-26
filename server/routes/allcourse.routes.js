const express =  require('express');
const { getAllCourse } = require('../controllers/allCourse.controller');

const router = express.Router();

router.get('/',getAllCourse)

module.exports = router


