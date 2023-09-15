import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import PostDetails from './components/PostDetails/PostDetails'
import {Container}  from '@mui/material'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import {GoogleOAuthProvider} from '@react-oauth/google'

const App = () => {
   

  return (
      <GoogleOAuthProvider clientId='941031622187-dur7fq1fan36vbre1gjel1304c9nrog3.apps.googleusercontent.com'>
       <BrowserRouter>
          <Container maxWidth='lg'>
            <Navbar/>  
               <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/auth' element={<Auth/>}/>
                  <Route path='/posts/:id' element={<PostDetails/>}/>
               </Routes>  
         </Container>
       </BrowserRouter>
      </GoogleOAuthProvider>
  )
}

export default App

