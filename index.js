const express = require("express");
const apiController = require("./controller");
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiController);

// const connectDb = require("./config/db");

// Env동적할당 가능
// connectDb();

app.listen(8000, () => {
  console.log("Express Running on 8000");
});
