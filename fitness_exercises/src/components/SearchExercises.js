import React,{useState,useEffect} from 'react'
import {Box,Button,Stack,TextField,Typography} from '@mui/material'
import { fetchData,exercisesOptions } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar'

export default function SearchExercises({setExercises,bodyPart,setBodyPart}) {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
 
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
    const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);

    
    const searchedExercises = exercisesData.filter((item) =>
        item.name.includes(search) ||
        item.target.includes(search) ||
        item.equipment.includes(search) ||
        item.bodyPart.includes(search)
    );

    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

    setSearch('');
    setExercises(exercisesData);
    }
  };
  return (
    <Stack alignItems={"center"} mt={"37px"} justifyContent={"center"} p={"20px"}>
        <Typography fontWeight={700} sx={{fontSize:{lg:"44px" ,xs:"30px"}}} mb={"50px"} textAlign={"center"}  >
             Awesome Exercises you <br /> 
                   should know ! 
        </Typography>
        <Box position={"relative"} mb={"72px"} justifyContent={"space-between"}>
              <TextField
                sx={{
                  input:{fontWeight:"700",
                         border:"none",
                          borderRadius:"10px"},
                  width:{lg:"900px",xs:"350px"},
                  backgroundColor:"#fff",
                  borderRadius:"40px",
                  ml:{lg:"-200px"}
                }}
                height="76px"
                value={search}
                onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
                placeholder='Search  for Exercises '
                type='text'
               />
               <Button className="search-btn"
                        sx={{
                          bgcolor:"#FF2625",
                          color:"#fff",
                          textDecoration:"none",
                          width:{lg:"175px",xs:"80px"},
                          fontSize:{lg:"22px",xs:"16px"},
                          height:"56px",
                          position:"absolute",
                          right:0,
                          ml:"8px"
                        }}
                        onClick={handleSearch}>
                Search
               </Button>
        </Box>
        <Box sx={{position:"relative",width:"100%",p:"20px"}}>
             <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
        </Box>
    </Stack>
  )
}
