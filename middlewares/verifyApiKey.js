const Bussiness = require("../models/bussiness");
const bcrypt = require("bcrypt");
const { Types } = require("mongoose");

const verifyApiKey = async (req, res, next) => {
  try {
    // Retrieve the API key and secret hash from the request
    const businessId = req.headers["x-store-id"];
    const receivedApiKey = req.headers["x-api-key"];
    const receivedSecretHash = req.headers["x-api-secret"];

    // Retrieve the API key and secret hash from the database
    const business = await Bussiness.findById({
      _id: Types.ObjectId(businessId),
    }).select("api.id api.secret");

    if (!business) return res.status(401).send("Business not found");

    const storedApiKey = business.api.id;
    const storedSecretHash = business.api.secret;

    // Compare the values
    if (
      storedApiKey === receivedApiKey &&
      storedSecretHash === receivedSecretHash
    ) {
      // Allow the request to proceed
      req.business = {
        id: businessId,
      };
      next();
    } else {
      // Return an error or redirect the request
      res.status(401).send("Unauthorized");
    }
  } catch (err) {
    console.log("err: ", err);
    res.status(401).send("Unauthorized");
  }
};

module.exports = verifyApiKey;
