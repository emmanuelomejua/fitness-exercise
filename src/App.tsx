
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

function App() {
  return (
    <Box width='400px'>
      Navber
      <Routes>
        <Route path='/' />
        <Route path='/' />
      </Routes>
    </Box>
  );
}

export default App;
