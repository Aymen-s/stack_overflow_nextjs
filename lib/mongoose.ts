import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log("missing mongodb url");
  }

  if (isConnected) {
    return console.log("mongodb is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "DevFlow",
    });

    isConnected = true;

    console.log("mongodb is connected");
  } catch (error) {
    console.log("MONGODB connection failed", error);
  }
};
