import React, { FC, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Pagination, Box, Typography, Stack } from '@mui/material';

import { fetchData, exerciseOptions } from '../utils/fetchData';


export interface IExercise {
  name: string;
}


interface IData {
  bodyPart: any;
  setBodyPart?: Dispatch<SetStateAction<string>>;
  setExercises: Dispatch<SetStateAction<IExercise[]>>;
  exercises?: IExercise[];
}


const Exercises:FC<IData> = ({ setExercises, bodyPart, exercises }) => {

  console.log(exercises);
  
  return (
    <Box id='exercises' sx={{mt: {lg: '100px'}}} mt='50px' p='20px'>
      <Typography variant='h3' mb='30px'>Showing Result</Typography>

      <Stack direction='row' sx={{gap: {lg: '85px', sm: '35px'}}} flexWrap='wrap' justifyContent='center'>
      { exercises?.map((exercise) => (
        <p key={exercise.name}>{exercise.name}</p>
      ))

      }
      </Stack>
    </Box>
  )
}

export default Exercises;
