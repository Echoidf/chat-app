import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Successfully connected to mongodb.");
  } catch (err) {
    console.log("Error connection to MongoDB", err.message);
  }
};

export default connectToMongoDB;
