const Course = require("../model/course.model");

const getCourseByUserId = async (req,res)=>{
    try {
      const userId = req.user.id;
      console.log(userId);
      const courses = await Course.find({ userId: userId });
  
      if (courses.length === 0) {
        return res.status(404).json({ message: "No courses found for the given userId." });
      }
  
      return res.status(200).json({ courses: courses });
    } catch (error) {
      console.error('Error finding courses by userId:', error);
      return res.status(500).json({ error: 'Error finding courses by userId.' });
    }
  };
  module.exports ={
    getCourseByUserId
  }