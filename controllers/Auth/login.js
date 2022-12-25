const User = require("../../models/user");
const bcrypt = require("bcrypt");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../../utils/token");

module.exports = async (req, res) => {
  const { username, password } = req.body;

  let existingUser = await User.findOne({ username });
  if (!existingUser) {
    return res
      .status(400)
      .send({ message: "Username or password is incorrect" });
  }

  let isMatch = await bcrypt.compare(password, existingUser.password);
  if (!isMatch) {
    return res
      .status(400)
      .send({ message: "Username or password is incorrect" });
  }

  const token = generateAccessToken({
    userId: existingUser._id,
    bussiness: existingUser.bussiness,
  });
  res
    .cookie("token", `Bearer ${token}`)
    .send({ msg: "Login successful", token });
};
