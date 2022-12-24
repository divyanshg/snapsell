const jwt = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });
  },
  generateRefreshToken: (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  },
  verifyAccessToken: (token) => {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  },
};
