const Product = require("../model/Product");

const productData = async (req, res) => {
  try {
    const newDataArray = req.body;

    const result = await Product.insertMany(newDataArray);
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Product.findByIdAndDelete({ id });

    res.status(200).json(result);
  } catch (err) {}
};

module.exports = { productData, deleteProduct };
