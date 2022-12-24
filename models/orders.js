const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  bussiness: {
    type: Schema.Types.ObjectId,
    ref: "Bussiness",
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: Number,
    },
  ],
  total: Number,
  status: {
    type: String,
    enum: ["pending", "accepted", "completed", "cancelled"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  paymentMethod: {
    type: String,
    enum: ["online", "cod"],
    default: "cod",
  },
  paymentResult: {
    id: String,
    status: {
      type: String,
      enum: ["initiated", "completed", "failed"],
      default: "initiated",
    },
    update_time: String,
    email_address: String,
  },
  deliveredAt: Date,
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
});

const Order = model("Order", orderSchema);

module.exports = Order;
