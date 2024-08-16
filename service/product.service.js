const Product = require("../schema/product.schema");
const connectDB = require("../config/db");

const createProduct = async (product) => {
  await connectDB();

  console.log("제품확인", product);
  try {
    const createProduct = await Product.create({
      productId: product.productId,
      title: product.title,
      stock: product.stock,
      price: product.price,
      imgUrl: product.imgUrl,
      description: product.description,
    });
    console.log("제품가져오기", createProduct);
  } catch (err) {
    console.log("서비스에러", err);
  }
};

module.exports = {
  createProduct,
};
