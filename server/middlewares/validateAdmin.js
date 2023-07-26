const User = require("../model/user/user.model");
const validateAdmin = async(req, res, next) => {
  const userID = req.user.id
  const findRole = await User.findById(userID)
  // console.log(findRole.isAdmin);
  
  if (findRole.isAdmin==true) {
    // User is an admin, continue to the next middleware or route handler
    next();
  } else {
    // User is not an admin, return a 403 Forbidden status code
    res.status(403).json({ message: "You are not authorized as an admin." });
  }
  };
  
  module.exports = {
    validateAdmin
  };
  