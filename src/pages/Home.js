import React from 'react';
import DataComponent from '../components/DataComponent';
import './Home.css';
import { Grid, Box, Link } from '@mui/material';

const buttonColor = {
  color: '#D9E9E5'
}

function Home() {
  return (
    <div className="main">
      <Grid>
        <Grid item xs={12}>
        <Box component='span' display='flex' justifyContent='center'>
           <Link underline="none" sx={buttonColor} color="secondary" href="/books">Available books</Link>
        </Box>
        </Grid>
    </Grid>
<div className="data-component">
      <DataComponent />
      </div>
      </div>
  );
}

export default Home;
