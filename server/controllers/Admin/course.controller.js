const { default: mongoose } = require("mongoose");
const Course = require("../../model/admin/course.model");

const createCourse = async (req, res) => {
  try {
    const userId = req.user.id;
    const authorName = req.user.name;
    const { title, description, imageUrl,duration, price, publish, videoData } = req.body;

    const course = await Course.create({
      userId,
      authorName,
      title,
      description,
      imageUrl,
      duration,
      price,
      publish,
      videoData, // Array of objects containing title and link
    });

    return res.status(201).json({ message: "Course Created", courseId: course._id });
  } catch (err) {
    return res.status(500).json({ error: "Error creating course" });
  }
};


const updateCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const userId= req.user.id;
    const { title, description, price, imageUrl,publish ,videoData} = req.body;
    const findCourse = await Course.findById({ _id: courseId });
    const courseUserId = findCourse.userId;
    
    if(userId!=courseUserId)
    {
      return res.status(401).send({message:"Your not allowed to update this"})
    }
    if (!findCourse) {
      return res.status(401).send({ message: "No Such Course Exist" });
    };
    findCourse.title = title; 
    findCourse.description = description; 
    findCourse.price = price; 
    findCourse.imageUrl = imageUrl; 
    findCourse.publish = publish; 
    findCourse.videoData= videoData;

    await findCourse.save();
    return res.status(201).json({ message: "Course Updated" });
  } catch (err) {
    return res.status(500).send({ err: "Error Updating Course" });
  }
};


const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const deleteCourse = await Course.findById(courseId);
    if (!deleteCourse) {
      // console.log("Course not found"); 
      return res.status(404).json({ message: "No Such Course Exist" });
    }

    const courseUserId = deleteCourse.userId;
    const userId = req.user.id;
    // console.log(courseUserId.toString(), userId);
    if (userId !== courseUserId.toString()) {
      return res.status(401).send({ message: "You are not allowed to delete this" });
    }

    await deleteCourse.deleteOne();
    // console.log("Course deleted:", deleteCourse); 
    return res.status(201).json({ message: "Course Deleted" });
  } catch (err) {
    // console.error("Error deleting Course:", err); 
    return res.status(500).send({ err: "Error Deleting Course" });
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


const getCourseById = async (req, res) => {
  try {
    const courseId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({ message: "Invalid courseId." });
    }
    const course = await Course.aggregate([
      { $match: { _id: mongoose.Types.ObjectId.createFromHexString(courseId)} }, 
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
          videoData: 1,
        },
      },
    ]);

    if (course.length === 0) {
      return res.status(404).json({ message: "No course found for the given courseId." });
    }

    return res.status(200).json({course:course});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error finding course by courseId.' });
  }
};


module.exports = {
  createCourse,
  updateCourse,
  deleteCourse,
  getCourseByUserId,
  getCourseById
};
