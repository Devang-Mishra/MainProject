import React from 'react'
import {Container,Grow,Grid} from '@mui/material'
import { useDispatch } from 'react-redux'
import { useState,useEffect } from 'react'
import {getPosts} from '../../actions/posts'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
// import usestyles from './styles'
const Home = () => {
  const dispatch=useDispatch();
  const [currentId,setcurrentId] = useState(null); 
//   const classes=usestyles();  

  useEffect(()=>{
      dispatch(getPosts());
  },[currentId,dispatch])  
  const [flexDirection, setFlexDirection] = useState('row');
  
  // code for making the form up in case of mobile devices ..adding eventlistner resize to window which a calls a function handleWindowResize every time browser screen size changes
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 600) { // Adjust the breakpoint as needed
        setFlexDirection('column-reverse');
      } else {
        setFlexDirection('row');
      }
    };

    // Add an event listener for window resize
    window.addEventListener('resize', handleWindowResize);

    // Call the resize handler once to set initial state
    handleWindowResize();

    // Remove the event listener on component unmount
    return () => {
      //clean up code  
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  return (
    <Grow in={true}>
    <Container>
       <Grid  sx={{flexDirection: flexDirection}} container  justifyContent="space-between" alignItems="stretch"  spacing={3}>
              <Grid item xs={12} md={7} > 
                  <Posts setcurrentId={setcurrentId} />
              </Grid>
              <Grid item xs={12} md={4} >
                  <Form currentId={currentId} setcurrentId={setcurrentId}/>{/*Passing both currentId ans setcurrentId as props to the component*/}
              </Grid>
        </Grid>
    </Container>
 </Grow>     )  
}

export default Home