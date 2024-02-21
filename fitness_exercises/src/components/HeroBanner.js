import React from 'react'
import {Box,Typography,Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

export default function HeroBanner() {
  return (

   
    <Box sx={{
                  mt:{
                    lg:'212px',
                    xs:"70px"},
                  ml:{
                    sm:'50px'}
                }}
            position={"relative"}p={"20px"}
       >
        <Typography color={"#FF2625"} 
                    fontWeight={600} 
                    fontSize={'26px'}
                    >
          Fitness Club
        </Typography>
        <Typography color={"black"} 
                    fontWeight={"bold"} 
                    sx={{fontSize:{
                                    lg:'44px',
                                    sx:'40px'}
                         }} 
                    marginBottom={"23px"}
                    mt={"20px"}>
           Seat, Smile <br/> And Repeat 
        </Typography>
        <Typography 
                   fontSize={"22px"} 
                   lineHeight={"35px"} 
                   marginBottom={"60px"}>
          check out the most effective exercises 
        </Typography>
        
        <Button variant='contained'
                  color="error"
                  href='#exercises'
                 sx={{
                    backgroundColor:"#FF2625",
                    padding:"9px"
                  }}>
            Explore Exercises
        </Button>
        <Typography fontWeight={900} 
                    color={"#FF2625"}
                    sx={{
                          opacity:0.1,
                          display:{lg:'block',
                                   xs:'none'}
                        }}
                    fontSize={"200px"} >
          Exercises
        </Typography>
          <img src={HeroBannerImage} 
               alt="banner"
               className="hero-banner-img"/>
       
     </Box> 
  
  )
}
