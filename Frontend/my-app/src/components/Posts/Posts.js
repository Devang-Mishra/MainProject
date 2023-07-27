import React from 'react'
import useStyles from './styles'
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import { Grid,CircularProgress } from '@mui/material';
const Posts = ({setcurrentId}) => {
  
  const {post,posts,isLoading}=useSelector((state)=> state.posts)
  const classes=useStyles()  
  
  return (
       !posts.length ? <CircularProgress/> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={2}>
            {
              posts.map((post)=>(
                  <Grid  key={post._id} item xs={12} sm={6} md={6}>  
                        <Post post={post}   setcurrentId={setcurrentId}/>
                  </Grid>
              ))
            }
          </Grid>
       )
    ); 
}

export default Posts;