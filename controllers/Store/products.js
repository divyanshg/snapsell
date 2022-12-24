const Products = require("../../models/Products");

module.exports = {
  getAllProducts: async (req, res, next) => {
    try {
      let business;

      if (req.auth) {
        business = req.auth.business;
      } else {
        business = req.business.id;
      }

      let products = await Products.find({ business });

      if (products.length === 0) {
        return res.status(404).json({ message: "No products found" });
      }

      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  },
  createProduct: async (req, res, next) => {
    try {
      let { business } = req.auth;
      let { name, price, description, variants } = req.body;

      await Products.create({
        name,
        price,
        description,
        business,
        variants: variants ? variants : [],
      });

      res.status(201).send("Product created");
    } catch (error) {
      next(error);
    }
  },
  getProductById: async (req, res, next) => {
    try {
      let { business } = req.auth;
      let { id } = req.params;
      let product = await Products.findOne({ _id: id, business });
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  },
  updateProductById: async (req, res, next) => {
    try {
      let { business } = req.auth;
      let { id } = req.params;
      let { name, price, description, variants } = req.body;
      let product = await Products.findOneAndUpdate(
        { _id: id, business },
        { name, price, description, variants },
        { new: true }
      );
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).send("Product updated");
    } catch (err) {
      next(err);
    }
  },
  deleteProductById: async (req, res, next) => {
    try {
      let { business } = req.auth;
      let { id } = req.params;
      let product = await Products.findOneAndDelete({ _id: id, business });
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).send("Product deleted");
    } catch (err) {
      next(err);
    }
  },
};
