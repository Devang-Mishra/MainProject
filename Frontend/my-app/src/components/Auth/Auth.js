import React,{useState} from 'react'
import {Avatar,Button,Paper,Grid,Typography,Container} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import useStyles from './styles'
import Input from './input'

const Auth = () => {
  const classes=useStyles();
  const [isSignup,setisSignup]=useState(false);
  const [showPassword,setshowPassword]=useState(false);
  const handleSubmit=()=>{

  }

  const handleChange=()=>{

  }
  const switchMode=()=>{
    setisSignup((previsSignup)=>!previsSignup)
    setshowPassword(false)
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
          <Button sx={{marginTop: '15px'}} type="submit" fullWidth variant="contained" color='primary'>
              {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justifyContent='flex-end'>
             <Grid item>
                <Button sx={{color:'#6e6a6c',marginTop:'5px'}} onClick={switchMode}>
                 {isSignup? 'Already have an accoint? Sign In' : "Don't have an account? Sign Up"}
                </Button>
             </Grid>
          </Grid>
        </form>
       </Paper>
     </Container>
  )
}

export default Auth