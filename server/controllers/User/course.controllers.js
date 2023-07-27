const Course = require('../../model/admin/course.model');
const User = require('../../model/user/user.model');

const purchaseCourseById = async (req, res) => {
  try {
    const courseId = req.params.id;
    const userId = req.user.id;
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the course is already purchased
    if (user.purchasedCourses.includes(courseId)) {
      return res.status(400).json({ message: 'Course already purchased' });
    }

    // Add the course ID to the purchasedCourses array
    user.purchasedCourses.push(courseId);
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
    return res.status(200).json({ purchasedCourses: user.purchasedCourses });
  } catch (error) {
    return res.status(500).json({ error: 'Error fetching purchased courses' });
  }
};

module.exports = {
    purchaseCourseById,
  purchasedCourses,
};
