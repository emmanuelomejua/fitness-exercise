import { Box } from '@mui/material';
import React, { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import { IExercise } from '../components/Exercises';

const Home = () => {

  const [exercises, setExercises] = useState<IExercise[]>([]);

  const [bodyPart, setBodyPart] = useState<string | unknown>('all');

  return (
    <Box>
        <HeroBanner/>
        <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises}/>
        <Exercises bodyPart={bodyPart} exercises={exercises} setExercises={setExercises}/>
    </Box>
  )
}

export default Home;
