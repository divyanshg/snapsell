const crypto = require("crypto");
const bcrypt = require("bcrypt");

module.exports = {
  createApiKey: (business) => {
    return {
      id: crypto.randomBytes(32).toString("hex"),
      secret: bcrypt.hashSync(
        `${business}-${crypto.randomBytes(32).toString("hex")}`,
        10
      ),
    };
  },
};
