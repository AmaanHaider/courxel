const Course = require('../../model/admin/course.model');

const getAllCourse = async (req, res) => {
  try {
    const allCourse = await Course.find();
    res.status(200).json({
      publicCourse: allCourse
    });
  } catch (err) {
    res.status(500).json({ error: "Error finding Public Course" });
  }
};

const getCourseById = async (req, res) => {
  try {
    const courseId = req.params.id;
    const courses = await Course.find({ _id: courseId });

    if (courses.length === 0) {
      return res.status(404).json({ message: "No courses found for the given userId." });
    }

    return res.status(200).json({ courses: courses });
  } catch (error) {
    return res.status(500).json({ error: 'Error finding courses by userId.' });
  }
};

const getCourseByUserId = async (req, res) => {
  try {
    const userId = req.user.id;
    const courses = await Course.find({ userId: userId });

    if (courses.length === 0) {
      return res.status(404).json({ message: "No courses found for the given userId." });
    }

    return res.status(200).json({ courses: courses });
  } catch (error) {
    return res.status(500).json({ error: 'Error finding courses by userId.' });
  }
};

module.exports = {
  getAllCourse,
  getCourseById,
  getCourseByUserId
};
