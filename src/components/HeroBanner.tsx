import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import HeroBaanerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{ 
        mt: { lg: '210px', xs: '50px' },
        ml: { sm: '40px'}
     }} position='relative' p='20px'>
        <Typography color='#ff2625' fontWeight={600} fontSize='25px' mb={4}>Fitness Club</Typography>
        <Typography fontWeight={700} mb='23px' mt='30px' sx={{
             fontSize: {lg: '40px', sm: '30px'}
        }}>
            Sweet, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={3}>
            Check out the most effective exercises
        </Typography>
        <Button variant='contained' color='error' href='#excercises' sx={{backgroundColor: '#ff2625', padding: '10px'}}>Explore Exercises</Button>

        <Typography fontWeight={600} color='#ff2625' sx={{
            opacity: '0.1',
            display: { lg: 'block', xm: 'none' }
        }} fontSize='200px'>
            Exercises
        </Typography>

        <img src={HeroBaanerImage} alt='HeroBaanerImage' className='hero-banner-img'/>

    </Box>
  )
}

export default HeroBanner;
