import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"
import postRoutes from "./routes/postroute.js"
const app=express();




app.use(bodyParser.json({limit:"30mb", extended :true}));
app.use(bodyParser.urlencoded({limit:"30mb" ,extended:"true"}));
app.use(cors())
app.use('/posts',postRoutes)


const CONNECTION_URL="mongodb+srv://Devangmishra285:2020033%40Dm@cluster0.zuhigk9.mongodb.net/MemoriesDb"
const PORT=process.env.PORT|| 8000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology: true})
.then(()=> app.listen(PORT,()=>{console.log(`Server running on ${PORT}`)}))
.catch((error)=>console.log(error.message))



