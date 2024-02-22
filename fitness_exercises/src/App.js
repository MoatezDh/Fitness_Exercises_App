import React,{useEffect} from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import {Box} from '@mui/material'
import NavBar from './components/NavBar'
import Home from './pages/Home.js'
import ExerciseDetails from './pages/ExerciseDetails.js'
import Footer from './components/Footer.js'

import Logo from './assets/images/Logo.png'

export default function App() {
  console.log(Logo);
  useEffect(() => {
    document.title = 'Locomotive Gym';
    const icon = document.createElement('link');
    icon.rel = 'icon';
    icon.type = 'image/png';
    icon.href = {Logo};
    document.head.appendChild(icon);
  },[])
  return (
    <div>
     
        <Box width={"400px"} sx={{width:{xl:"1488px"}}}>
           <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/exercise/:idExercise' element={<ExerciseDetails/>}/>

            </Routes>
            <Footer />
        </Box>
    </div>
  )
}
