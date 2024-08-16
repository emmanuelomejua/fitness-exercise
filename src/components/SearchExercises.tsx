import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Stack, Button } from '@mui/material';

const SearchExercises = () => {

    const [search, setSearch] = useState('');


    useEffect(() => {

    }, [])


    const handleSearch = () => {

    }
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
        <Typography fontSize={700} mb='50px' textAlign='center' sx={{
            fontSize: { lg: '40px', xs: '30px' }
        }}>
            Awesome Excercises you <br/> should know
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
    </Stack>
  )
}

export default SearchExercises;
