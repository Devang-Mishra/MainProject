import React from 'react'
import {Container,AppBar,Typography,Grow,Grid, Toolbar} from '@mui/material'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import icon from './Images/icon2.png'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {getPosts} from './actions/posts'
const App = () => {
  const classes=useStyles();
  const dispatch=useDispatch();
     
  useEffect(()=>{
      dispatch(getPosts());
  },[dispatch]) //componentwillupdate behaviour .dispatching the action is preffered in useeffect 

  return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Toolbar>
                  <Typography  className={classes.heading} variant='h2' align='center'>Memories</Typography>
                  <img  className={classes.image} src={icon} alt='memories' height="60"/>
                </Toolbar>
            </AppBar>
            <Grow in>
               <Container>
                  <Grid container justifyContent="space-between" alignItems="stretch"  spacing="3">
                         <Grid item xs={12} sm={7}> 
                             <Posts/>
                         </Grid>
                         <Grid item xs={12} sm={4}>
                             <Form/>
                         </Grid>
                  </Grid>
               </Container>
            </Grow>   
        </Container>
  )
}

export default App

