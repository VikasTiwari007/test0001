const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
  },
  operation: {
    type: String,
  },
});

module.exports = mongoose.model("product", productSchema);
