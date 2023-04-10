const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Bank", {
      useNewUrlParser: true,
    });
    console.log("connected successfully");
  } catch (err) {
    console.error("connection error:", err);
  }
};

module.exports = { connectDB };
