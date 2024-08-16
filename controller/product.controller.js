const { createProduct } = require("../service/product.service");
const productController = require("express").Router();

productController.post("/", async (req, res) => {
  const body = req.body;
  console.log("응답값ㅊ", body);
  const product = createProduct(body);
  return res.json({ result: true, data: product });
});
module.exports = productController;
