const { createProduct } = require("../service/product.service");
const productController = require("express").Router();

productController.post("/", async (req, res) => {
  const body = req.body;
  console.log("body", body);
  try {
    const product = await createProduct(body);
    return res.json({ result: true, data: product });
  } catch (err) {
    console.log("productServiceError::\n", err);
    return res.status(500).json({ result: false });
  }
});
module.exports = productController;
