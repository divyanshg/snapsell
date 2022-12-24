const Orders = require("../../models/orders");
const Customer = require("../../models/customers");

module.exports = {
  getAllOrders: async (req, res, next) => {
    try {
      let { business } = req.auth;
      let orders = await Orders.find({ business })
        .populate("products.product", "name price description variants")
        .populate("customer", "name email phone");

      if (orders.length === 0) {
        return res.status(404).json({ message: "No orders found" });
      }

      res.status(200).json(orders);
    } catch (err) {
      next(err);
    }
  },

  createOrder: async (req, res, next) => {
    try {
      let business = req.business?.id;
      let { products, customer, paymentMethod } = req.body;

      //create customer if not exists by email and phone
      let existingCustomer = await Customer.findOne({
        $or: [{ email: customer.email }, { phone: customer.phone }],
      });

      if (!existingCustomer) {
        existingCustomer = await Customer.create(customer);
      }

      let order = await Orders.create({
        products,
        business,
        customer: existingCustomer._id,
        paymentMethod: paymentMethod ? paymentMethod : "cod",
      });

      //update existing users orders
      await Customer.findOneAndUpdate(
        { _id: existingCustomer._id },
        { $push: { orders: order._id } }
      );

      //send email to customer
      /*let email;
      if (paymentMethod === "cash") {
        email = await sendEmail(
          existingCustomer.email,
          "Order Confirmation",
          "Your order has been placed successfully. Please pay cash on delivery."
        );
      } else {
        email = await sendEmail(
          existingCustomer.email,
          "Order Confirmation",
          "Your order has been placed successfully."
        );
      }*/

      res.status(201).send("Order created");
    } catch (error) {
      next(error);
    }
  },

  getOrderById: async (req, res, next) => {
    try {
      let { business } = req.auth;
      let { id } = req.params;
      let order = await Orders.findOne({ _id: id, business })
        .populate("products.product", "name price description variants")
        .populate("customer", "name email phone");

      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  },

  updateOrderById: async (req, res, next) => {
    try {
      let { business } = req.auth;
      let { id } = req.params;
      let { status } = req.body;
      let order = await Orders.findOneAndUpdate(
        { _id: id, business },
        { status },
        { new: true }
      );
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.status(200).send("Status updated");
    } catch (error) {
      next(error);
    }
  },
};
