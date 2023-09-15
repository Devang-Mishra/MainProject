import React,{useState,useEffect} from 'react'
import {Avatar,Button,Paper,Grid,Typography,Container} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import useStyles from './styles'
import Input from './input'
// import Icon from './icon'
import { GoogleLogin} from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {signup,signin} from '../../actions/auth'

const initialState={firstName:'',lastName:'',email:'',password:'',confirmPassword:''}
const user=JSON.parse(localStorage.getItem('profile'));
const Auth = () => {
  const classes=useStyles();
  const [isSignup,setisSignup]=useState(false);
  const [showPassword,setshowPassword]=useState(false);
  const [formData,setFormData]=useState(initialState);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(formData);
  
    if(isSignup){
        dispatch(signup(formData,navigate));
    }
    else{
        dispatch(signin(formData,navigate));

    } 
  }

  const handleChange=(e)=>{
     setFormData({...formData,[e.target.name]:e.target.value});
  }

  const switchMode=()=>{
    setFormData(initialState)
    setisSignup((previousSignup)=>!previousSignup)
    setshowPassword(false)
  }


  const googleSuccess= async (res)=>{
      // console.log(res);
      var decodeddata=jwt_decode(res.credential)
      const result=decodeddata;
      const token=res.credential;
     
      try {
         await dispatch({type: 'AUTH',data:{result,token}})
         navigate('/')
        
      } catch (error) {
        console.log(error)
      }

  }

  const googleFailure=(error)=>{
    console.log(error)
    console.log("Google Sign In was unsuccesfull. Try Again Later")
  }
  const handleShowPassword=()=> setshowPassword((prevShowPassword)=> !prevShowPassword)

  return (
  
     <Container component="main" maxWidth="xs">
       <Paper className={classes.paper} elevation={3}>
         <Avatar sx={{bgcolor:'#f20a57'}} className={classes.avatar}>
           <LockOutlinedIcon/>
         </Avatar>
         <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
         <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
          {
             isSignup && (
              <>
             <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half/>
             <Input name='lastName' label='Last Name' handleChange={handleChange}  half/>
              </>
            )
          }
           <Input name='email' label='Email Address' handleChange={handleChange} type='email'/>
           <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
           {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
          </Grid>

          <Grid container sx={{marginTop:'10px'}} justifyContent='center'>
             <Grid item>
                  <GoogleLogin  onSuccess={googleSuccess} onError={googleFailure}/>
             </Grid>
          </Grid>

           <Button sx={{marginTop: '15px',marginBottom: '10px'}} type="submit" fullWidth variant="contained" color='primary'>
              {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justifyContent='center'>
             <Grid item>
                <Button sx={{color:'#6e6a6c',marginTop:'5px', fontSize: '12px'}} onClick={switchMode}>
                 {isSignup? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                </Button>
             </Grid>
          </Grid>
        </form>
       </Paper>
     </Container>
  )
}

export default Auth