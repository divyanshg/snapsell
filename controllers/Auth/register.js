const User = require("../../models/user");
const Bussiness = require("../../models/bussiness");

const {
  generateAccessToken,
  generateRefreshToken,
} = require("../../utils/token");
const { createApiKey } = require("../../utils/keys");

module.exports = async (req, res) => {
  const { username, password, bussiness } = req.body;

  let existingUser = await User.findOne({
    username,
  });

  if (existingUser) {
    return res.status(400).send({ message: "Username is already taken" });
  }

  //create the user and business

  const newUser = await User.create({
    username,
    password,
  });

  const newBussiness = await Bussiness.create({
    name: bussiness.name,
    owner: newUser._id,
  });

  //create a key and secret combination and bcrypt the secret for bussiness
  let api = createApiKey(newBussiness._id);

  //update the bussiness with the api key and secret
  newBussiness.api = api;
  await newBussiness.save();

  newUser.bussiness = newBussiness._id;
  await newUser.save();

  const token = generateAccessToken({ userId: newUser._id });

  res.send({ token });
};
