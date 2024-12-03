import React, { FC, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Pagination, Box, Typography, Stack } from '@mui/material';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';
import { url } from '../utils/fetchData'



export interface IExercise {
  id: string;
  name: string;
  gifUrl: string;
  bodyPart: string;
  target: string;
}


interface IData {
  bodyPart: any;
  setBodyPart?: Dispatch<SetStateAction<string>>;
  setExercises: Dispatch<SetStateAction<IExercise[]>> ;
  exercises?: IExercise[];
}


const Exercises:FC<IData> = ({ setExercises, bodyPart, exercises=[] }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData(url, exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises?.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event: any, value: any) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises?.length) return <Loader />;

  
  return (
    <Box id='exercises' sx={{mt: {lg: '100px'}}} mt='50px' p='20px'>
      <Typography variant='h3' mb='30px'>Showing Result</Typography>

      <Stack direction='row' sx={{gap: {lg: '85px', sm: '35px'}}} flexWrap='wrap' justifyContent='center'>
      { exercises.map((exercise, index) => (
        <ExerciseCard exercise={exercise} key={index}/>
      ))
      }
      </Stack>

      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
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
  )
}

export default Exercises;
