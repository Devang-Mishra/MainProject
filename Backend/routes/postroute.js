import express  from "express";
import { getPosts,createPost,updatePost ,deletePost,likePost} from "../controllers/post.js";
import auth from '../middleware/auth.js'
const router=express.Router();

router.get('/',getPosts)
router.post('/',auth,createPost)//if we call middleware before some spefici action(createPost) then the req object from middleware is populated and has access in that specific action
router.patch('/:id',auth,updatePost); 
router.delete('/:id',auth,deletePost);
router.patch('/:id/likePost',auth,likePost);

export default router ;