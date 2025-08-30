//2

import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://766hariwork:Hari05052003@cluster0.7oskezr.mongodb.net/ffood-del').then(()=>console.log("DB connected"));

}

