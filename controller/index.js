const apiController = require("express").Router();
const productController = require("./product.controller");

apiController.use("/product", productController);

module.exports = apiController;
