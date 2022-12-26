const Products = require("../../models/Products");
const Bussiness = require("../../models/bussiness");

module.exports = {
  addProducts: async (req, res, next) => {
    try {
      let { product_name, product_price, store, post_id } = req.body;

      //get bussiness id by the store from bussiness model
      let { _id } = await Bussiness.findOne({
        instagram: store,
      }).select("_id");

      //remove currency symbol from price
      product_price = product_price.replace(/[^0-9.-]+/g, "");

      console.log("product_price: ", product_price);

      await Products.create({
        name: product_name,
        price: {
          actual: parseInt(product_price),
        },
        bussiness: _id,
      });

      res.status(201).send("Product created");
    } catch (error) {
      next(error);
    }
  },
};
