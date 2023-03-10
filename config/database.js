const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected with ${connection.host} `);
  } catch (error) {
    console.log(error, "cant connect to db");
  }
};

module.exports = connectDB;
