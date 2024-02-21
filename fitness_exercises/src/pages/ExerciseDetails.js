import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exercisesOptions,fetchData, youtubeOptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideo from '../components/ExerciseVideo'
import SimilarExercises from '../components/SimilarExercises'


export default function ExerciseDetails() {
    const [ExerciseDetail, setExerciseDetail] = useState({})
    const [ExerciseVideos, setExerciseVideos] = useState([])
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
    const [equipmentExercises, setEquipmentExercises] = useState([])
    const {idExercise}=useParams();
  
       useEffect(() => {
        const fetchExercisesData = async () => {
            
                const exerciseDbUrl = `https://exercisedb.p.rapidapi.com`;
                const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`;
               
                const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${idExercise}`, exercisesOptions);
                setExerciseDetail(exerciseDetailData);
                console.log(exerciseDetailData)

                const exerciseVideosData=await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)
                setExerciseVideos(exerciseVideosData)
                console.log(exerciseVideosData);
                
                const targetMuscleExercisesData=await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exercisesOptions)
                setTargetMuscleExercises(targetMuscleExercisesData)

                const equipmentExercisesData=await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exercisesOptions)
                setEquipmentExercises(equipmentExercisesData)
        };
    
        fetchExercisesData();
    }, [idExercise]);
    
       
  return (
    <Box>
      <Detail ExerciseDetail={ExerciseDetail}/>
      <ExerciseVideo ExerciseVideos={ExerciseVideos} name={ExerciseDetail.name}/>
      <SimilarExercises   targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}
