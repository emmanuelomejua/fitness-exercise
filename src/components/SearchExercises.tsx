import React, { useState, useEffect, FC } from 'react';
import { Box, Typography, TextField, Stack, Button } from '@mui/material';
import HorizontalScollBar from './HorizontalScollBar';
import { fetchData, exerciseOptions, url } from '../utils/fetchData';
import { IData } from './type';


const SearchExercises:FC<IData> = ({ bodyPart, setExercises, setBodyPart }) => {

    const [search, setSearch] = useState('');

    const [bodyParts, setBodyParts] = useState<string | unknown>([]);


    useEffect(() => {
        const fetchedExerciseData = async () => {
            try {
                const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
    
                setBodyParts(['all', ...bodyPartsData]);
            } catch (error) {
                throw new Error()
            }
        }
        fetchedExerciseData();
    }, [])


    const handleSearch = async () => {
        if(search){
            const exerciseData = await fetchData(url, exerciseOptions);
            console.log(exerciseData);

            const searchedExercise = exerciseData?.filter((exercise: any) => exercise.name.toLowerCase().includes(search)) 
                                || exerciseData.filter((exercise: any) => exercise.target.toLowerCase().includes(search))
                                || exerciseData.filter((exercise: any) => exercise.equipment.toLowerCase().includes(search))
                                || exerciseData.filter((exercise: any) => exercise.bodyPart.toLowerCase().includes(search))

            setSearch('');
            setExercises(searchedExercise);
        }
    }


  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
        <Typography fontSize={700} mb='50px' textAlign='center' sx={{
            fontSize: { lg: '40px', xs: '30px' }
        }}>
            Awesome Excercises You <br/> Should Know
        </Typography>

        <Box position='relative' mb='70px'>
            <TextField 
                fullWidth
                type='text'
                placeholder='Search Exercises'
                value={search}
                onChange={(e: any) => setSearch(e.target.value.toLowerCase())}
                sx={{
                    height: '70px' , 
                    input: {
                        fontWeight: 500, 
                        border: 'none', 
                        borderRadius: '4px',
                        outline: 'none', 
                    },
                    width: { lg: '700px', xs: '340px' },
                    backgroundColor: '#fff',
                    borderRadius: '40px',
                    outline: 'none', 
                }}
            />
            <Button onClick={handleSearch} className='search-btn' sx={{ 
                backgroundColor: '#ff2625', color: '#fff',
                width: {lg: '140px', xs: '75px'},
                fontSize: { lg: '20px', xs: '14px' },
                height: '56px',
                position: 'absolute',
                right: 0,
             }}>Search</Button>
        </Box>

        <Box sx={{
            width: '100%', position: 'relative', p: '20px'
        }}>
            <HorizontalScollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
    </Stack>
  )
}

export default SearchExercises;