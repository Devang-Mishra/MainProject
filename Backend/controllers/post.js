
import mongoose from 'mongoose';
import PostMessage from '../Models/PostMessage.js';
import router from '../routes/postroute.js';



export const getPosts=  async(req,res)=>{
    try {
       const postMessages=  await PostMessage.find() 
       console.log(postMessages)
       res.status(200).json(postMessages);
    } 
    catch (error) {
       res.status(404).json({message:error.message}) ;
    }  
}

export const createPost= async (req,res)=>{
     const post=req.body;
     const newPost =new PostMessage(post);
      
     try{
        await newPost.save();
        res.status(201).json(newPost);
     }
     catch(error)
     {
        res.status(401).json({message: error.message});
     }
}

export const updatePost=async (req,res)=> {
   // const {id:_id}=req.params;
   // const {post}=req.body;
   // if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

   

   // const updatedPost= await PostMessage.findByIdAndUpdate(_id,post, {new :true});
   // res.json(updatedPost)
   const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}
