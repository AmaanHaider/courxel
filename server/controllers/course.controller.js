const Course = require("../model/course.model");

const createCourse = async (req, res) => {
  try {
    const userId = req.user.id;
    const authorName = req.user.name;
    console.log(userId,authorName);
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
    // console.error("Error creating course:", err); // Debug statement
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
    const courseUserId = deleteCourse.userId;
    const userId= req.user.id;
    console.log(courseUserId,userId);
    if(userId!=courseUserId)
    {
      return res.status(401).send({message:"Your not allowed to Delete this"})
    };

    if (!deleteCourse){
      // console.log("Course not found"); // Debug statement
      return res.status(401).json({ message: "No Such Course Exist" });
    };
    await deleteCourse.deleteOne();
    // console.log("Course deleted:", deleteCourse); // Debug statement
    return res.status(201).json({ message: "Course Deleted" });
  } catch (err) {
    // console.error("Error deleting Course:", err); // Debug statement
    return res.status(500).send({ err: "Error Deleting Course" });
  }
};
module.exports = {
  createCourse,
  updateCourse,
  deleteCourse,
};
