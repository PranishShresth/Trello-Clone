const User = require("./../models/user.model");
const jwt = require("jsonwebtoken");

module.exports = {
  login: async function (req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      if (user.password === password) {
        res.setHeader("Content-Type", "application/json");
        let token = jwt.sign(
          { username: user.username },
          process.env.TOKEN_SECRET,
          { expiresIn: 129600 }
        );
        return res.status(200).json({
          user: {
            _id: user._id,
            email: user.email,
            name: user.username,
          },
          token,
        });
      }
      return res.status(400).json({
        error: "Invalid credentials",
      });
    } else {
      return res.status(301).send("User not found");
    }
  },
  register: async function (req, res, next) {
    try {
      const { username, email, password, confirmPassword } = req.body;
      if (password === confirmPassword) {
        const user = new User({ username, password, email });
        await user.save();
        return res.status(200).send("Succesfull");
      } else {
        return res.status(403).send("Damn");
      }
    } catch (err) {
      console.error(err);
    }
  },
};
