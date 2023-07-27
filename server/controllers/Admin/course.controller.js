const Course = require("../../model/admin/course.model");

const createCourse = async (req, res) => {
  try {
    const userId = req.user.id;
    const authorName = req.user.name;
    // console.log(userId,authorName);
    const { title, description, imageUrl ,price,publish} = req.body;
    const course = await Course.create({
      userId,
      authorName,
      title,
      description,
      imageUrl,
      price,
      publish
    });
    return res.status(201).json({ message:"Course Created",courseId:course._id });
  } catch (err) {
    // console.error("Error creating course:", err); 
    return res.status(500).json({ error: "Error creating course" });
  }
};

const updateCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const userId= req.user.id;
    const { title, description, price, imageUrl,publish } = req.body;
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

module.exports = {
  createCourse,
  updateCourse,
  deleteCourse,
};
