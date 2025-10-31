import express from 'express';
import dotenv from 'dotenv';
import connectDb from './utils/db.js';
import userRoutes from './routes/user.js';
import {v2 as cloudinary} from "cloudinary";
import cors from 'cors';

dotenv.config();

const cloudName = process.env.Cloud_Name;
const apiKey = process.env.Cloud_Api_key;
const apiSecret = process.env.Cloud_Api_Secret;

if (!cloudName || !apiKey || !apiSecret) {
    throw new Error("Missing Cloudinary environment variables. Please check your .env file.");
}

cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
});

const app=express();

app.use(express.json());
app.use(cors());

connectDb();

app.use("/api/v1",userRoutes);

const port= process.env.PORT

app.listen(port,()=>{
    console.log(`Server is running on post ${port}`);
});