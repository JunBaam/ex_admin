const Product = require("../schema/product.schema");
const connectDB = require("../config/db");
const uuidV4 = require("uuid.v4");

const createProduct = async (product) => {
  const { dbUrl, ...productData } = product;
  await connectDB(dbUrl);
  const productId = uuidV4();
  console.log({ productId });
  console.log("제품확인", product);
  try {
    const createProduct = await Product.create({
      ...productData,
      productId,
    });
    console.log("제품가져오기", createProduct);
    return createProduct;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createProduct,
};
