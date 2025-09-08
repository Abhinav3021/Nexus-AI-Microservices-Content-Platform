import mongoose from "mongoose";

const connectDb=async()=>{
    try {
        mongoose.connect(process.env.MONGO_URI as string,{
            dbName:'User',
        });
        console.log("Connected to mongodb");
    } catch (error) {
        console.log(error);
        
    }
};

export default connectDb;