import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Button from '@mui/material/Button';
import Navbar from './components/Navbar/Navbar';

import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
function App() {
  
  return (
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>
  );
}

export default App;