import React from 'react'
import { Typography,Box,Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <Box mt={'80px'} bgcolor={'##fff3f4'}>
      <Stack gap={'40px'} alignItems={'center'} px={'40px'} pt={'24px'}>
        <img src={Logo} alt='logo'  
           style={{
            width:'48px',
            height:'48px',
            margin:'0 20px'            
                  }}/>
        <Typography variant='h5' pb={'40px'} mt={'20px'} fontWeight={'bold'}>
             Made with ❤️ by <Link to='https://github.com/MoatezDh' target="_blank" >Moatez Dhieb</Link>
         </Typography>
      </Stack>
    </Box>
  )
}
