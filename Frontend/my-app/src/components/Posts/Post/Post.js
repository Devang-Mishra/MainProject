import React from 'react'
import useStyles from './styles'
import { Card, CardActions,CardContent,CardMedia,Button,Typography,ButtonBase } from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'; 
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined'
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch } from 'react-redux';
import {deletePost ,likePost} from '../../../actions/posts';
import { useNavigate } from 'react-router-dom';



const Post = ({post ,setcurrentId}) => {
  const classes=useStyles()
  const dispatch=useDispatch();
  const user=JSON.parse(localStorage.getItem('profile'));
  const navigate=useNavigate();
  const Likes = () => {
   if (post?.likes?.length > 0) 
   {
     return post.likes.find((like) => like === (user?.result?.sub || user?.result?._id))
       ? (
         <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
       ) : (
         <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
       );
   }
   
   return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    
   
};
  
  const openPost=()=> navigate(`/posts/${post._id}`);
  return (
      <Card sx={{borderRadius: 3.5}} className={classes.card} raised elevation={6} >
        <ButtonBase className={classes.CardActions}  onClick={openPost}>
        <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
         
         <div className={classes.overlay}>
            <Typography variant="h6">{post.name}</Typography>
            <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
         </div>
         {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator ) && (
          <div className={classes.overlay2}>
             <Button style={{color:'white'}} size="medium" onClick={()=>{setcurrentId(post._id)}}>
               <MoreHorizIcon fontSize='default'/>             
             </Button>           
          </div>
         )}
         <div className={classes.details}>
            <Typography variant='body2' color='textSecondary'>{post.tags.map((tag)=> `#${tag} `)}</Typography>
         </div>
         <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography> 
         <CardContent>
            <Typography  variant='body2' color="textSecondary" component="p">{post.message}</Typography> 
         </CardContent>
         </ButtonBase>
         <CardActions className={classes.cardActions}>
            <Button size='small' color='primary' disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
                <Likes/>
            </Button>
            {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator ) && (
               <Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))}>
                <DeleteIcon fontSize='small' />  Delete
              </Button>
            )}
           
         </CardActions>  
      </Card>
  )
}

export default Post