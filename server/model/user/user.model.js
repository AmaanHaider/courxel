const mongoose = require("mongoose");


const userSchema = mongoose.Schema(
  {
    name:{ type: String, required: true },
    email: {type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin:{type:Boolean,default:false},
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  },{
    timestamps: true, }
);

module.exports = mongoose.model("User", userSchema);
