const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDb = require("./config/db");
const userAuthRoutes = require('./routes/User/auth.routes');
const adminAuthRoutes = require('./routes/Admin/auth.routes');
const courseRoutes = require('./routes/course.routes');
const validateToken = require("./middlewares/validateToken");
const { getAllCourse } = require("./controllers/allCourse.controller");
const myCoursesRoutes = require('./routes/mycourse.routes');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
connectDb();
app.use(express.json());


// public route
app.use("/api/allCourse",getAllCourse);

// user auth route
app.use("/api/auth/user", userAuthRoutes);
// admin auth route
app.use("/api/auth/admin", adminAuthRoutes);


// private route
app.use("/api/course",validateToken,courseRoutes);
app.use("/api/mycourses",validateToken,myCoursesRoutes);


app.get("/", (req, res) => {
  res.json(
    "Hi there from Amaan Haider,  This is a BACKEND SERVER OF COURXEL 🦄✨"
  );
});



app.listen(PORT, () => {
  console.log(`Running on ${PORT}✨✅🦄`);
});
