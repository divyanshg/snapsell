const Bussiness = require("../models/bussiness");
const bcrypt = require("bcrypt");

const verifyApiKey = async (req, res, next) => {
  // Retrieve the API key and secret hash from the request
  const businessId = req.headers["x-store-id"];
  const receivedApiKey = req.headers["x-api-key"];
  const receivedSecretHash = req.headers["x-secret-hash"];

  // Retrieve the API key and secret hash from the database
  const business = Bussiness.findById({ _id: businessId }).select(
    "api.id api.secret"
  );

  const storedApiKey = business.api.id;
  const storedSecretHash = business.api.secret;

  // Compare the values
  let isMatch = await bcrypt.compare(receivedSecretHash, storedSecretHash);
  if (storedApiKey === receivedApiKey && isMatch) {
    // Allow the request to proceed
    req.business = {
      id: businessId,
    };
    next();
  } else {
    // Return an error or redirect the request
    res.status(401).send("Unauthorized");
  }
};

module.exports = verifyApiKey;
