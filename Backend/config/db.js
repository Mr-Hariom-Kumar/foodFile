//2
import mongoose from "mongoose";
export const connectDB=async()=>{
    try{
    console.log('Testing database connection...');
    await mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("DB connected"));
    
    }catch(error){
        console.error('Connection failed:', error.message);
        console.error('Full error:', error);
        process.exit(1);
    }


}


