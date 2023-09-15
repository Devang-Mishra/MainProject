import React from 'react'
import {Container,Grow,Grid} from '@mui/material'
import { useDispatch } from 'react-redux'
import { useState,useEffect } from 'react'
import {getPosts} from '../../actions/posts'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'

const Home = () => {
    const dispatch=useDispatch();
  const [currentId,setcurrentId] = useState(null);   
  useEffect(()=>{
      dispatch(getPosts());
  },[currentId,dispatch])  
  return (
    <Grow in={true}>
    <Container>
       <Grid   container  justifyContent="space-between" alignItems="stretch"  spacing={3}>
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