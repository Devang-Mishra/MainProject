import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import {Container}  from '@mui/material'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import {GoogleOAuthProvider} from '@react-oauth/google'

const App = () => {
   

  return (
      <GoogleOAuthProvider clientId='532792372169-npll3bb89klm4ittamembgtkqbq411o2.apps.googleusercontent.com'>
       <BrowserRouter>
          <Container maxWidth='lg'>
            <Navbar/> 
               <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/auth' element={<Auth/>}/>
               </Routes>  
         </Container>
       </BrowserRouter>
      </GoogleOAuthProvider>
  )
}

export default App

