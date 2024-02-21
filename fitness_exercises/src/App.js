import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import {Box} from '@mui/material'
import NavBar from './components/NavBar'
import Home from './pages/Home.js'
import ExerciseDetails from './pages/ExerciseDetails.js'
import Footer from './components/Footer.js'
export default function App() {
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
