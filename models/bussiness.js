const { Schema, model } = require("mongoose");

const bussinessSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  website: {
    type: String,
  },
  description: {
    type: String,
  },
  logo: {
    type: String,
  },
  instagram: {
    type: String,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  api: {
    id: {
      type: String,
    },
    secret: {
      type: String,
    },
  },
});

const Bussiness = model("Bussiness", bussinessSchema);

module.exports = Bussiness;
