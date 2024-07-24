import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button as MuiButton, Typography as MuiTypography } from '@mui/material';
import { Button, Typography } from './components/atoms';

function App() {
  return (
    <>
    <MuiTypography variant='h1'>MuiTypography</MuiTypography>
    <Typography variant='h1' text='Typography'/>
    <MuiTypography variant='h2'>MuiTypography</MuiTypography>
    <MuiTypography variant='h3'>MuiTypography</MuiTypography>
    <MuiTypography variant='h4'>MuiTypography</MuiTypography>
    <MuiTypography variant='h5'>MuiTypography</MuiTypography>
    <MuiTypography variant='h6'>MuiTypography</MuiTypography>
    <MuiTypography variant='subtitle1'>MuiTypography</MuiTypography>
    <MuiTypography variant='subtitle2'>MuiTypography</MuiTypography>
    <MuiTypography variant='body1'>MuiTypography</MuiTypography>
    <MuiTypography variant='body2'>MuiTypography</MuiTypography>
    <MuiTypography variant='caption'>MuiTypography</MuiTypography>
    <MuiTypography variant='overline'>MuiTypography</MuiTypography>
    <MuiButton variant='contained' >Button</MuiButton>
    <Button label='Button' variant='contained'/>
    
    
    </>
  );
}

export default App;
