import React ,{useState ,useEffect }from 'react'
import useStyles from './styles'
import FileBase from   'react-file-base64'
import {Paper,Typography,TextField,Button} from '@mui/material'
import { useDispatch ,useSelector } from 'react-redux'
import { createPost,updatePost } from '../../actions/posts'




 
const Form = ({currentId,setcurrentId}) => {
  
  const classes=useStyles()
  const dispatch=useDispatch()
  const [postData,setpostData]=useState({creator:'',title:'',message:'',tags:'',selectedFile:''})
  const post=useSelector((state) => currentId? state.posts.find((p) => p._id === currentId):null);//here we are getting the post from posts state when we already have postid related to tha post otherwise we get null
  
  useEffect(()=>{
    if(post) setpostData(post);
  },[post])

  const handleSubmit=(e)=>{
     e.preventDefault();
     //if currentId exists means we have post with that id and now we will call updatepost instead of createpost
     if(currentId){
       dispatch(updatePost(currentId,postData))
     }
     else{
       dispatch(createPost(postData)); 
     } 
     
  }

  const clear=()=>{

  }
  return (
    <div>
      <Paper className={classes.paper}>
         <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
               <Typography variant='h6'>Creating a Memory</Typography>
               <TextField name="creator" variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e)=>setpostData({...postData , creator: e.target.value})} />
               <TextField name="title" variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e)=>setpostData({...postData , title: e.target.value})} />
               <TextField name="message" variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e)=>setpostData({...postData , message: e.target.value})} />
               <TextField name="tags" variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e)=>setpostData({...postData , tags: e.target.value})} />
               <div className={classes.fileInput}>
                 <FileBase type="file" multiple={false} onDone={({base64})=> setpostData({...postData,selectedFile: base64})} fullWidth/>{/*destruicting the base 64 form e value which  we pass in the arrow function of onDone handler instead of passing whole event*/}
               </div>
               <Button className={classes.buttonSubmit} color='primary'  variant='contained'  size='medium' type='submit' fullWidth>Submit</Button>
               <Button variant='text' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
         </form>
      </Paper>
    </div>
  )
}

export default Form