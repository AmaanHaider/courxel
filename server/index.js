const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDb = require("./config/db");
const userAuthRoutes = require('./routes/User/auth.routes');
const adminAuthRoutes = require('./routes/Admin/auth.routes');
const courseRoutes = require('./routes/Admin/course.routes');
const getAllCourseRoutes = require('./routes/Public/allcourse.routes');
const getCourseByIdRoutes = require('./routes/Public/getCourseById.routes');
const purchaseCourseById = require('./routes/User/purchase.routes');
const purchasedCourse = require('./routes/User/purchasedcourse.routes');
const {validateAdmin} = require("./middlewares/validateAdmin");
const myCoursesRoutes = require('./routes/Public/mycourse.routes');
const validateToken = require("./middlewares/validateToken");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
connectDb();
app.use(express.json());


// public route
app.use("/api/allcourse",getAllCourseRoutes);
app.use("/api/getcourse",getCourseByIdRoutes);

// --------------------Authentication Routes -------------------------
// user auth route
app.use("/api/auth/user", userAuthRoutes);
// admin auth route
app.use("/api/auth/admin", adminAuthRoutes);


// --------------------Private Routes ---------------------------

// private user routes
app.use("/api/user/purchase",validateToken,purchaseCourseById);
app.use("/api/user/purchasedcourse",validateToken,purchasedCourse);

// private admin routes
app.use("/api/admin/course",validateAdmin,courseRoutes);
app.use("/api/admin/mycourses",validateAdmin,myCoursesRoutes);




app.get("/", (req, res) => {
  res.json(
    "Hi there from Amaan Haider,  This is a BACKEND SERVER OF COURXEL 🦄✨"
  );
});



app.listen(PORT, () => {
  console.log(`Running on ${PORT}✨✅🦄`);
});
