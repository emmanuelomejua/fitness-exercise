import Navbar from './components/Navber';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import Exercise from './pages/Exercise';
import Footer from './components/Footer';

function App() {
  return (
    <Box width='400px' sx={{ width: {xl: '1200px'}}} m='auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<Exercise/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
