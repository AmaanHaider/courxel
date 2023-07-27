const express = require("express");
const { createCourse, updateCourse, deleteCourse } = require("../../controllers/Admin/course.controller");
// const { validateAdmin } = require("../../middlewares/validateAdmin");
const router = express.Router();

router.post("/create",createCourse );
router.put("/update/:id",updateCourse);
router.delete("/delete/:id",deleteCourse);

module.exports = router;
