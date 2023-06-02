import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"
import postRoutes from "./routes/post.js"
const app=express();

app.use('/post',postRoutes)

app.get('/go',function(req,res){
    res.send("this also work")
})

app.use(bodyParser.json({limit:"30mb", extended :true}));
app.use(bodyParser.urlencoded({limit:"30mb" ,extended:"true"}));
app.use(cors())

const CONNECTION_URL="mongodb+srv://Devangmishra285:2020033%40Dm@cluster0.zuhigk9.mongodb.net/"
const PORT=process.env.PORT|| 8000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology: true})
.then(()=> app.listen(PORT,()=>{console.log(`Server running on ${PORT}`)}))
.catch((error)=>console.log(error.message))



