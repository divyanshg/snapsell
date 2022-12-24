const { Router } = require("express");
const { createOrder } = require("../../controllers/Store/orders");
const {
  getAllProducts,
  getProductById,
} = require("../../controllers/Store/products");
const verifyApiKey = require("../../middlewares/verifyApiKey");
const router = Router();

router.get("/products", verifyApiKey, getAllProducts);
router.get("/products/:id", verifyApiKey, getProductById);

router.post("/order", verifyApiKey, createOrder);

module.exports = router;
