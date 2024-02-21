import React from 'react'
import {Box,Stack,Typography} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'



export default function SimilarExercises({targetMuscleExercises,equipmentExercises}) {
  return (
    
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
     <Typography variant='h3' mb={6}>
      Exercises that target the same muscle group
     </Typography>
     <Stack direction={'row'} sx={{p:'2',position:'relative'}}>
        {targetMuscleExercises.length ? 
        <HorizontalScrollbar data={targetMuscleExercises}/>
          :<Loader />
      }
     </Stack>

     <Typography variant='h3' mb={6} mt={6}>
      Exercises that use the same equipment 
     </Typography>
     <Stack direction={'row'} sx={{p:'2',position:'relative'}}>
        {equipmentExercises.length ? 
        <HorizontalScrollbar data={equipmentExercises}/>
          :<Loader />
      }
     </Stack>
    </Box>
  )
}
