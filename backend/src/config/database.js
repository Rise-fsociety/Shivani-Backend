import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URL) {
            throw new Error("MONGODB_URL is missing from your environment variables.");
        }

        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`\n MongoDB connected !!! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch (error) {
        console.error('MongoDB Connection Error Details:', error);
        process.exit(1); 
    }
};

export default connectDB;