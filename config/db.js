require("dotenv").config();
const mongoose = require("mongoose");
let connectedDbUrl = "";
const CONNECTED_SIGNAL = [1, 2];
const connectDB = async (dbUrl) => {
  console.log("mongoose.connection.readyState", mongoose.connection.readyState);
  try {
    // mongoose.set("strictQuery", false);

    const { host, port, name } = mongoose.connection;
    // const connectedDbUrl =
    //   mongoose.connection.host +
    //   ":" +
    //   mongoose.connection.port +
    //   "/" +
    //   mongoose.connection.name;

    const isNonConnected = [host, port, name].some((prop) => !prop);
    console.log(connectedDbUrl, dbUrl);
    if (!isNonConnected && connectedDbUrl !== dbUrl) {
      const isDistroyed = await mongoose.connection.destroy();
      if (isDistroyed) {
        await mongoose.connect(dbUrl);
        connectedDbUrl = dbUrl;
        return mongoose;
      }
      return;
    }

    if (CONNECTED_SIGNAL.includes(mongoose.connection.readyState)) {
      console.log("asdasdasdasd");
      // await mongoose.connect(dbUrl);
      // connectedDbUrl = dbUrl;
      return mongoose;
    } else {
      console.log("==-=-=23918240982049tsdnvjk");

      await mongoose.connect(dbUrl);
      connectedDbUrl = dbUrl;
      // console.log(`Database Connected: ${mo.connection.host}`);
      return mongoose;
    }
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;
