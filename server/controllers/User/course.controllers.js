const { default: mongoose } = require('mongoose');
const Course = require('../../model/admin/course.model');
const User = require('../../model/user/user.model');

const purchaseCourseById = async (req, res) => {
  try {
    const courseId = req.params.id;
    const userId = req.user.id;
    const course = await Course.findById(courseId);
    // console.log(course);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (user.purchasedCourses.includes(courseId)) {
      return res.status(400).json({ message: 'Course already purchased' });
    }

    user.purchasedCourses.push(course);
    await user.save();

    return res.status(200).json({ message: 'Course purchased successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Error purchasing course' });
  }
};

const purchasedCourses = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).populate('purchasedCourses');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // console.log({ purchasedCourses: user.purchasedCourses } );
    return res.status(200).json({ purchasedCourses: user.purchasedCourses });
  } catch (error) {
    return res.status(500).json({ error: 'Error fetching purchased courses' });
  }
};

const purchasedCourseDetailById = async (req, res) => {
  try {
    const courseId = req.params.id;
    
    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({ message: "Invalid courseId." });
    }

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "No course found for the given courseId." });
    }

    return res.status(200).json(course);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error finding course by courseId.' });
  }
};

module.exports = {
    purchaseCourseById,
  purchasedCourses,
  purchasedCourseDetailById
};
