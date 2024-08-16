import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png'

const Navber = () => {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{gap: {sm: '40px', xl: '122px'}, mt: {sm: '20px', xs: '14px'}, justifyContent:'none', px: '10px'}} >
      <Link to='/'>
        <img src={Logo} alt='Logo' style={{ width: '43px', height: '43px', margin: '0px 20px' }}/>
      </Link>

      <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
        <Link to='/' style={{ textDecoration: 'none', color: '#3a1212', borderBottom: '1px solid #ff2625' }}>Home</Link>
        <a href='#excercises' style={{ textDecoration: 'none', color: '#3a1212' }}> 
        Excercise
        </a>
      </Stack>
    </Stack>
  )
}

export default Navber;
