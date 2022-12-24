const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    actual: Number,
    discounted: Number,
  },
  unit: {
    name: String,
    quantity: Number,
  },
  description: {
    type: String,
  },
  images: [
    {
      type: String,
    },
  ],
  variants: [
    {
      size: [String],
      color: [String],
    },
  ],
  bussiness: {
    type: Schema.Types.ObjectId,
    ref: "Bussiness",
  },
});

const Product = model("Product", productSchema);

module.exports = Product;
