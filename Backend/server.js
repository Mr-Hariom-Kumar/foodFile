//1

import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import 'dotenv/config'
import orderRouter from './routes/orderRoute.js';



//app config
const app=express();
const port=5000;

//middleware
app.use(express.json())
app.use(cors())

//db connections

connectDB();

//api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API WORKING")
})
console.log("JWT_SECRET from env:", process.env.JWT_SECRET);


app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})

//mongodb+srv://766hariwork:Hari05052003@cluster0.7oskezr.mongodb.net/?