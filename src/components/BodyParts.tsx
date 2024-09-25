import React, { FC } from 'react';
import { hData } from './type';
import { Typography, Stack } from '@mui/material';
import Icon from '../assets/icons/gym.png';


const BodyParts:FC<hData> = () => {
  return (
    <Stack>
       <img src={Icon} alt='dumbell' className='body-part-icon'/>
    </Stack>
  )
}

export default BodyParts;
