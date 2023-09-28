import React ,{useState ,useEffect }from 'react'
import useStyles from './styles'
import FileBase from   'react-file-base64'
import {Paper,Typography,TextField,Button} from '@mui/material'
import { useDispatch ,useSelector } from 'react-redux'
import { createPost,getPosts,updatePost } from '../../actions/posts'


//geting user form localstorag
 
const Form = ({currentId,setcurrentId}) => {
  const user=JSON.parse(localStorage.getItem('profile'));
  // console.log(user.result.name)
  const classes=useStyles()
  const dispatch=useDispatch()
  const [postData,setpostData]=useState({title:'',message:'',tags:'',selectedFile:''})
  const post=useSelector((state) => (currentId? state.posts.posts.find((p) => p._id === currentId):null));//here we are getting the post from posts state when we already have postid related to tha post otherwise we get null
  useEffect(()=>{
    if(post) setpostData(post);
  },[post])

  const handleSubmit=(e)=>{
     e.preventDefault();
     //if currentId exists means we have post with that id and now we will call updatepost instead of createpost
     if(currentId){
       dispatch(updatePost(currentId,{...postData, name:user?.result?.name}))
     }
     else{
       dispatch(createPost({...postData, name:user?.result?.name})); 
     } 
     
     clear()        
  }

  if(!user?.result?.name)
  {
       return (
         <Paper className={classes.paper}>
             <Typography variant='h6' align='center'>
                Please Sign In to create your own post and like other's post.
             </Typography>
         </Paper>
       )
  }

  const clear=()=>{
     setcurrentId(null);
     setpostData({title:'',message:'',tags:'',selectedFile:''});
  }
  return (
    <div>
      <Paper className={classes.paper}>
         <form  autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>     
               <Typography variant='h6'>{currentId ? "Editing" : "Creating"} a Post</Typography>         
               <TextField name="title" variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e)=>setpostData({...postData , title: e.target.value})} />
               <TextField name="message" variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e)=>setpostData({...postData , message: e.target.value})} />
               <TextField name="tags" variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e)=>setpostData({...postData , tags: e.target.value.split(',')})} />{/*we are spliting the string that we get from e.target.value int array of items which were separated by , in the main string */}
               <div className={classes.fileInput}>                                                                                           
                 <FileBase type="file" multiple={false} onDone={({base64})=> setpostData({...postData,selectedFile: base64})} fullWidth/>{/*destruicting the base 64 from e value which  we pass in the arrow function of onDone handler instead of passing whole event*/}
               </div>
               <Button className={classes.buttonSubmit} color='primary'  variant='contained'  size='medium' type='submit' fullWidth>Submit</Button>
               <Button sx={{marginTop :'8px', backgroundColor:'#ed1f6e'}} variant='contained'  size='small' onClick={clear} fullWidth>Clear</Button>
         </form>
      </Paper>
    </div>
  )
}

export default Form