
const validateAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(403);
      throw new Error("Not authorized as an admin");
    };
  };
  
  module.exports = {
    validateAdmin,
  };
  