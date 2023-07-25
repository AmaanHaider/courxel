const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDb = require("./config/db");
const authRoutes = require('./routes/auth.routes')

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
connectDb();


app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json(
    "Hi there from Amaan Haider,  This is a BACKEND SERVER OF COURXEL 🦄✨"
  );
});



app.listen(PORT, () => {
  console.log(`Running on ${PORT}✨✅🦄`);
});
