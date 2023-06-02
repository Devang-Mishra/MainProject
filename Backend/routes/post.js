import express  from "express";

const router=express.Router();

router.use('/',(req,res)=>{
    res.send("this works")
})

router.use('/go',(req,res)=>{
    res.send("this i works")
})
export default router