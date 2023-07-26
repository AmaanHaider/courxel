const Course = require('../model/course.model');


const getAllCourse = async (req,res)=>{
    try {
        const allCourse = await Course.find();
        res.status(201).json({
            publicCourse: allCourse
        });
    } catch (err) {
        res.status(500).json({err:"Error finding Public Course"})
    };

};
module.exports ={
    getAllCourse
}