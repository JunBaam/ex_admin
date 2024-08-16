require("dotenv").config();

const mongoose = require("mongoose");

const CONNECTED_SIGNAL = [1, 2];
const connectDB = async (dbUrl) => {
  try {
    mongoose.set("strictQuery", false);

    const connectedDbUrl =
      mongoose.connection.host +
      ":" +
      mongoose.connection.port +
      "/" +
      mongoose.connection.name;
    if (connectedDbUrl && connectedDbUrl !== dbUrl) {
      const isDistroyed = await mongoose.connection.destroy();
      console.log({ isDistroyed });
      if (isDistroyed) {
        console.log("asdasdasd");
        // await mongoose.connect(dbUrl ?? process.env.MONGODB_URL);
        await mongoose.connect(process.env.MONGODB_URL);

        // console.log(`Database Connected: ${mongoose.connection.host}`);
        return mongoose;
      }
    }
    if (CONNECTED_SIGNAL.includes(mongoose.connection.readyState)) {
      return mongoose;
    } else {
      await mongoose.connect(dbUrl ?? process.env.MONGODB_URL);
      console.log(`Database Connected: ${conn.connection.host}`);
      return mongoose;
    }
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;
