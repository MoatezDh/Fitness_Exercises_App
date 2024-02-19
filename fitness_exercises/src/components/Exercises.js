import React, { useEffect, useState } from "react";
import { Pagination, Box, Stack, Typography } from "@mui/material";
import { exercisesOptions, fetchData } from "../utils/fetchData";
import ExercisesCard from "./ExercisesCard";

export default function Exercises({ exercises, setExercises, bodyPart }) {
  
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage=9;
  const indexOFLastExercise=currentPage * exercisesPerPage
  const indexOfFirstExercise=indexOFLastExercise-exercisesPerPage
  const currentExercises=exercises.slice(indexOfFirstExercise,indexOFLastExercise)
  const paginate =(e,value)=>{
         setCurrentPage(value)
         window.scrollTo({top:1800,behavior:'smooth'})
  }
   useEffect(() => {
      const fetchExercisesData=async()=>{
        let exercisesData=[]
        if (bodyPart==='all'){
          exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
        }else{
          exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exercisesOptions)
        }
        setExercises(exercisesData)
      }
       fetchExercisesData()
   }, [bodyPart])
   
  return (
    <Box
      id={"exercises"}
      sx={{
        mt: { lg: "110px" }, 
      }}
      mt= "50px"
      p= "20px"
    >
      <Typography variant="h3" mb={"46px"}>
        Showing Results
      </Typography>
      <Stack
        direction={"row"}
        sx={{
          gap: { lg: "110px", xs: "50px" },
        }}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {currentExercises.map((exercise, index) => (
          <ExercisesCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt={"100px"} alignItems={"center"}>
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
}
