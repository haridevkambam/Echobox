import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected successfully: ${connection.connection.host}`);
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
};