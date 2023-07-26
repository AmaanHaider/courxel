const express = require("express");
const { createCourse, updateCourse, deleteCourse } = require("../controllers/course.controller");
const { validateAdmin } = require("../middlewares/validateAdmin");
const router = express.Router();

router.post("/create",validateAdmin,createCourse );
router.put("/update/:id",validateAdmin,updateCourse);
router.delete("/delete/:id",validateAdmin,deleteCourse);

module.exports = router;
