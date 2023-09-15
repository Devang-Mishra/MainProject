import React ,{useState,useEffect}from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import useStyles from "./styles";
import icon from "../../Images/icon3.png";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate,useLocation } from "react-router-dom";
import decode from 'jwt-decode'
import textlogo from '../../Images/txtlogo.png'
const Navbar = () => {
  const classes = useStyles();
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const location=useLocation();
  const logout=()=>{
      dispatch({type:'LOGOUT'});     
      navigate('/auth');
      setUser(null);
  }
  
  useEffect(()=>{
     const token=user?.token;
     if(token){
      const decodedToken=decode(token);

      if(decodedToken.exp * 1000 < new Date().getTime()) logout();
     }

     setUser(JSON.parse(localStorage.getItem('profile')));
  },[location]); 
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Toolbar>
      
        <Typography component="a" href='/'  sx={{ flexGrow:1,marginRight:'40px'}} >
        <img src={textlogo} className={classes.textlogo} alt="PostEra" />
        
        </Typography>
                        
        
        {user? (
             <div className={classes.profile}>
                  <Avatar className={classes.purple} alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
                  <Typography  className={classes.userName} variant='h5'>{user.result.name}</Typography>
                  <Button size='small' variant="contained" sx={{backgroundColor:'#ed1f6e',marginRight:'10px',marginLeft:'25px'}} className={classes.logout} onClick={logout} >Logout</Button>
             </div>
        ) : (
               <Button  size="medium" component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>    
        )}
      </Toolbar>
    
    </AppBar>
  );
};

export default Navbar;
 