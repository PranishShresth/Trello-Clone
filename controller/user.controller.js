const User = require("./../models/user.model");
const jwt = require("jsonwebtoken");

module.exports = {
  updateUserDetails: async function (req, res, next) {
    try {
      const { id } = req.user;
      await User.findByIdAndUpdate(
        id,
        { ...req.body },
        { new: true },
        function (err, user) {
          if (!err)
            return res.status(200).json({
              _id: user._id,
              email: user.email,
              name: user.username,
              bio: user.bio,
            });
        }
      );
    } catch (err) {
      if (err) return res.status(401).json({ err: err.message });
    }
  },
  currentUser: async function (req, res, next) {
    try {
      const { id } = req.user;
      const user = await User.findOne({ _id: id });
      return res.status(200).json({
        user: {
          _id: user._id,
          email: user.email,
          name: user.username,
          bio: user.bio,
        },
      });
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },
  login: async function (req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      if (user.password === password) {
        res.setHeader("Content-Type", "application/json");
        let token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {
          expiresIn: "1h",
        });
        return res.status(200).json({
          user: {
            _id: user._id,
            email: user.email,
            name: user.username,
            bio: user.bio,
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
        return res.status(403).send("Something went wrong");
      }
    } catch (err) {
      if (err) return res.status(403).send({ msg: err.message });
    }
  },

  oauth: async function (req, res, next) {
    try {
      if (req.body === null) {
        return res.status(400).send("Request failed");
      }
      const { name, email } = req.body;
      const userExist = await User.findOne({ email: email });
      if (userExist) {
        res.setHeader("Content-Type", "application/json");
        let token = jwt.sign({ id: userExist._id }, process.env.TOKEN_SECRET, {
          expiresIn: "1h",
        });
        return res.status(200).send({
          user: {
            _id: userExist._id,
            email: userExist.email,
            name: userExist.username,
            bio: userExist.bio,
          },
          token,
        });
      }
      const user = new User({ username: name, password: "oauth", email });
      await user.save();
      res.setHeader("Content-Type", "application/json");
      let token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: "1h",
      });
      return res.status(200).json({
        user: {
          _id: user._id,
          email: user.email,
          name: user.username,
          bio: user.bio,
        },
        token,
      });
    } catch (err) {
      if (err) return res.status(401).json({ msg: err.message });
    }
  },
};
