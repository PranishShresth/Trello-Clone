const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.header("Authorization").split(" ")[1];

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).json({ msg: err.message });
      req.user = user;
      next();
    });
    if (!token) {
      return res.status(401).json({ msg: "No token provided" });
    }
  } catch (err) {
    return res.status(401).json({ msg: err.message });
  }
};

module.exports = auth;
