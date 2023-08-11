const Admin = require("../../model/admin/admin.model");
const brcypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("All fields required");
    }

    const userAvailable = await Admin.findOne({ email });
    if (userAvailable) {
      res.status(400);
      throw new Error("Already Exists");
    }

    // Hash password
    const hashedPassword = await brcypt.hash(password, 10);
    const user = await Admin.create({
      name,
      email,
      password: hashedPassword,
    });
    if (user) {
      res.status(201).json({ _id: user.id, email: user.email,message:"Admin Registered Successfully" });
    } else {
      res.status(400);
      throw new Error("Admin data not valid");
    }
  } catch (error) {
    res.status(500).json({ message: "Error registering Admin", error: error.message });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("All fields required");
    }

    const user = await Admin.findOne({ email });
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
      res.status(200).json({token:token,adminname:user.name});
    } else {
      res.status(401);
      throw new Error("Email or password is not valid");
    }
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};

const currentAdmin = async (req, res) => {
  try {
    const { name, email } = req.user; // Include  field in the response
    res.json({ name, email });
  } catch (error) {
    res.status(500).json({ message: "Error fetching admin data", error: error.message });
  }
};
module.exports = {
  registerAdmin,
  loginAdmin,
  currentAdmin,
};
