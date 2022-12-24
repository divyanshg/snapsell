const { verifyAccessToken } = require("../utils/token");

module.exports = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      error: "Access token not found",
    });
  }

  try {
    const payload = verifyAccessToken(token);
    req.auth = payload;
    next();
  } catch (error) {
    return res.status(403).json({
      error: "Invalid access token",
    });
  }
};
