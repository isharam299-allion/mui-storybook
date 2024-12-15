import React from 'react';
import './App.css';
import { Button , Checkbox, Radio, Typography  } from '@mui/material';
import { ButtonGroup } from './components/atoms';

function App() {
  return (
    <>
      
      <Typography variant='h1'>Typography</Typography>
      <Button variant='outlined' color='primary'></Button>
      <ButtonGroup buttonLabels={['label', 'label', 'label']} color='secondary' orientation='horizontal' variant='contained'/>
      <Checkbox color='primary' checked/>
      <Radio checked color='secondary'/>
    </> 
  );
}

export default App;
