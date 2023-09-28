import bcryt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../Models/user.js'

export const signin =async (req,res) =>{
       const {email,password} =req.body;
       try {
            const existingUser= await User.findOne({email});
            if(!existingUser) return res.status(404).json({message: "User doesn't exist>"});

            const isPasswordCorrect= await bcryt.compare(password,existingUser.password);

            if(!isPasswordCorrect) return res.status(400).json({message:"Invalid Caredentials."});
             
            const token = jwt.sign({email:existingUser.email ,id:existingUser._id},'test',{expiresIn: '1h'})//generating json web token by encoding the data provided  using jwt.sign() funciton and setting 'test' as a secret key to verify the token when it is decoded somewhere
            
            res.status(200).json({result:existingUser,token});

       } catch (error) {
            res.status(500).json({message:'Something went wrong.'});
       }
} 

export const signup=async (req,res) =>{
        const {email , password , confirmPassword, firstName,lastName}=req.body;
        try {
            const existingUser= await User.findOne({email});

            if(existingUser) return res.status(400).json({message: "User Already exists"});

            if(password !== confirmPassword) res.status(400).json({message: "Passwords do not match."});
            
            const hashedPassword= await bcryt.hash(password,12);

            const result=await User.create({email,password: hashedPassword,name:`${firstName} ${lastName}`})
            
            const token = jwt.sign({email:result.email ,id:result._id},'test',{expiresIn: '1h'})//generating json web token by encoding the data provided  using jwt.sign() funciton and setting 'test' as a secret key to verify the token when it is decoded somewhere
            res.status(200).json({result,token});
        } catch (error) {
            res.status(500).json({message: 'Something went wrong.'})
        }
} 