const { Router } = require("express");
const isAuthenticated = require("../../middlewares/isAuthenticated");
const {
  getAllOrders,
  createOrder,
  getOrderById,
  updateOrderById,
} = require("../../controllers/Store/orders");
const router = Router();

const {
  getAllProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../../controllers/Store/products");
const verifyApiKey = require("../../middlewares/verifyApiKey");

router
  .route("/products")
  .get(isAuthenticated, getAllProducts)
  .post(isAuthenticated, createProduct);

router
  .route("/products/:id")
  .get(getProductById)
  .put(isAuthenticated, updateProductById)
  .delete(isAuthenticated, deleteProductById);

router.route("/orders").get(isAuthenticated, getAllOrders);

router
  .route("/orders/:id")
  .get(isAuthenticated, getOrderById)
  .put(isAuthenticated, updateOrderById);

module.exports = router;
