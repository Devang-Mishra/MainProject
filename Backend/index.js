import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"
import postRoutes from "./routes/postroute.js"  
import userRoutes from './routes/userroute.js'
import dotenv from 'dotenv';
const app=express();

dotenv.config();



app.use(bodyParser.json({limit:"30mb", extended :true}));
app.use(bodyParser.urlencoded({limit:"30mb" ,extended:"true"}));
app.use(cors())
app.use('/posts',postRoutes)
app.use('/user',userRoutes);

const PORT=process.env.PORT || 8000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology: true})
.then(()=> app.listen(PORT,()=>{console.log(`Server running on ${PORT}`)}))
.catch((error)=>console.log(error.message))



