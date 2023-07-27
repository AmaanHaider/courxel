const jwt = require("jsonwebtoken");

const validateAdmin = async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Admin is not authorized" });
      }

      // console.log(decoded.user.isAdmin);

      if (!decoded.user.isAdmin) {
        return res.status(403).json({ message: "You are not authorized as an admin." });
      }

      req.user = decoded.user;
      next();
    });
  } else {
    return res.status(401).json({ message: "Admin is not authorized or token is missing in request" });
  }
};

module.exports = {
  validateAdmin,
};
