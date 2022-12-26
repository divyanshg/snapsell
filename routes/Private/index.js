const { Router } = require("express");
const router = Router();

const upload = require("../../utils/multer");
const { addProducts } = require("../../controllers/Private");

router.post("/product/new", upload.array("images", 10), addProducts);

module.exports = router;
