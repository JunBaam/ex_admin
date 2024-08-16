require("dotenv").config();
const mongoose = require("mongoose");

// const createProduct = async (product) => {

//   try {
//     const createProduct = await Product.create(product);
//     return createProduct;
//   } catch (err) {
//     console.log(err);
//   }
// };

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("몽고 연결완료"))
  .catch((err) => {
    console.log("(!)Occured error from connecting mongodb");
    console.log(err);
    process.exit();
  });

// const connectMongo = (MONGODB_URL) => {
//   mongoose
//     .connect(MONGODB_URL ?? process.env.MONGODB_URL)
//     .then(() => console.log("몽고 연결완료"))
//     .catch((err) => {
//       console.log("(!)Occured error from connecting mongodb");
//       console.log(err);
//       process.exit();
//     });
// };

module.exports = connectMongo;
