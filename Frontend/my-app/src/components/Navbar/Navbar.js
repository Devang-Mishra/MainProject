import React from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import useStyles from "./styles";
import icon from "../../Images/icon3.png";
import {Link} from "react-router-dom";
const Navbar = () => {
  const classes = useStyles();
  const user=null;
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Toolbar>
      
        <Typography component="a" href='/' className={classes.heading} sx={{ typography: {sm:'h2',xs:'h5'}, flexGrow:1}} >
          Memories
          <img className={classes.image} src={icon} alt="memories" height="50" />
        </Typography>
         

        {user? (
             <div className={classes.profile}>
                  <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                  <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                  <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
             </div>
        ) : (
               <Button  size="small" component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    
    </AppBar>
  );
};

export default Navbar;
 