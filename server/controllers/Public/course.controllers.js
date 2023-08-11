const { default: mongoose } = require('mongoose');
const Course = require('../../model/admin/course.model');



const getAllCourse = async (req, res) => {
  try {
    const allCourse = await Course.aggregate([
      {
        $match: { publish: true } // Filter documents where publish is true
      },
      {
        $project: {
          _id: 1,
          userId: 1,
          authorName: 1,
          title: 1,
          description: 1,
          imageUrl: 1,
          duration:1,
          price: 1,
          publish: 1,
          videoData: { $map: { input: "$videoData", as: "link", in: "$$link.title" } },
          date: 1,
          createdAt: 1,
          updatedAt: 1,
        },
      },
    ]);

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
    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({ message: "Invalid courseId." });
    }
    const courses = await Course.aggregate([
      { $match: { _id: mongoose.Types.ObjectId.createFromHexString(courseId)} }, // Convert courseId to ObjectId
      {
        $project: {
          _id: 1,
          userId: 1,
          authorName: 1,
          title: 1,
          description: 1,
          imageUrl: 1,
          duration:1,
          price: 1,
          publish: 1,
          date: 1,
          createdAt: 1,
          updatedAt: 1,
          videoData: { $map: { input: "$videoData", as: "link", in:{ title: "$$link.title"} } },
        },
      },
    ]);

    if (courses.length === 0) {
      return res.status(404).json({ message: "No courses found for the given courseId." });
    }

    return res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error finding courses by courseId.' });
  }
};



module.exports = {
  getAllCourse,
  getCourseById,
};
