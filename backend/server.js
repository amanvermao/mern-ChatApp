import express from "express";
import dotenv from "dotenv";
import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

dotenv.config()


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)
app.use("/api/users", userRoutes)



// app.get('/',(req,res)=>{
//     res.send("helloworlddd")
// })

app.listen(PORT,()=> {
    connectToMongoDB();
    console.log(`server running on Port ${PORT}`)
}); 

