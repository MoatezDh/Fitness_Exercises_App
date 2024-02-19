import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exercisesOptions,fetchData } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideo from '../components/ExerciseVideo'
import SimilarExercises from '../components/SimilarExercises'


export default function ExerciseDetails() {
  return (
    <Box>
      <Detail ExerciseDetails={ExerciseDetails}/>
      <ExerciseVideo/>
      <SimilarExercises/>
    </Box>
  )
}
