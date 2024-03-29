
import mongoose from 'mongoose';
import PostMessage from '../Models/PostMessage.js';
import router from '../routes/postroute.js';

export const getPost= async (req,res) => {
   const {id}=req.params;
   try{
          const post=await PostMessage.findById(id);
          res.status(200).json(post);
   }
   catch(error){
          res.status(404).json({message:error.message});    
   }
}

export const getPosts=  async(req,res)=>{
    try {
       const postMessages=  await PostMessage.find() 
       console.log(postMessages)
      } 
    catch (error) {
       res.status(404).json({message:error.message}) ;
    }  
}

export const createPost= async (req,res)=>{
     const post=req.body;
     const newPost =new PostMessage({...post,creator: req.userId , createdAt: new Date().toISOString()});
      
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
   // const {id}=req.params;
   // const post=req.body;
   // if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    
   

   // const updatedPost= await PostMessage.findByIdAndUpdate(id,{...post,id}, {new :true});
   // res.json(updatedPost)
   const { id } = req.params;
    const { title, message,creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator,title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.status(200).json(updatedPost);
}


export const deletePost = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

   await PostMessage.findByIdAndRemove(id);

   res.json({ message: "Post deleted successfully." });
}

export const likePost= async (req,res) => {
   const {id} =req.params;
   if(!req.userId) return res.json({message: 'Unauthenticated'});
    
   if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
   
   const post=await PostMessage.findById(id);

   const index=post.likes.findIndex((id) => id === String(req.userId))

   if(index === -1)
   {
      //like a post as no user with that id has liked a post
      post.likes.push(req.userId);
   } 
   else
   {  
      // dislike a post
      post.likes=post.likes.filter((id)=> id !== String(req.userId))
   }
   
   const updatedPost=await PostMessage.findByIdAndUpdate(id,post,{new :true});
   res.status(200).json(updatedPost)
   
}