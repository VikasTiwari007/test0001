const express = require("express");
const { productData, deleteProduct } = require("../controller/controller");
const router = express.Router();

router.post("/product", productData);
router.post("/product/:id", deleteProduct);

module.exports = router;
