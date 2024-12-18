import mongoose from "mongoose";

// Declare the connection state globally so it persists across requests
let isConnected = false;

export const connectToDatabase = async () => {
  // Set mongoose to use the "strictQuery" option
  mongoose.set("strictQuery", true);

  // Check if the MongoDB URL is provided
  if (!process.env.MONGODB_URL) {
    return console.log("Missing MongoDB URL");
  }

  // If already connected, log and return without connecting again
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "DevFlow", // Database name
    });

    // Update the connection state to true once connected
    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("MONGODB connection failed", error);
  }
};
