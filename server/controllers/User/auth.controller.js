const User = require("../../model/user/user.model");
const brcypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("All fields required");
    }

    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      res.status(400);
      throw new Error("Already Exists");
    }

    // Hash password
    const hashedPassword = await brcypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    if (user) {
      res.status(201).json({ _id: user.id, email: user.email,message:"User Registered Successfully" });
    } else {
      res.status(400);
      throw new Error("User data not valid");
    }
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("All fields required");
    }

    const user = await User.findOne({ email });
    if (user && (await brcypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          user: {
            name: user.name,
            email: user.email,
            id: user.id,
            isAdmin: user.isAdmin,
          },
        },
        process.env.JWT_SECRET,
        { expiresIn: "59m" }
      );
      res.status(200).json({token:token,name:user.name});
    } else {
      res.status(401);
      throw new Error("Email or password is not valid");
    }
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};

const currentUser = async (req, res) => {
  try {
    const { name, email } = req.user; // Include  field in the response
    res.json({ name, email });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user data", error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
