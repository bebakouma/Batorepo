import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { normalize } from 'path';


export default function SearchBar() {
  return (
    <Box 
      component="form"
      sx={{  m: 1, width: '30%', marginLeft: 'auto', marginTop:'2px', marginRight: 10}}
      noValidate
      autoComplete="off"

    >
      <TextField 
      id="outlined-basic" 
      placeholder="Search..." 
      variant="outlined" 
      sx={{  width: '100%' }}
      style={{backgroundColor:'#0A85C7', color:'white'}}
      InputProps={{
        style: {
          height: 35,
          fontStyle: 'normal',
          color: 'white',
          backgroundColor: 'rgb(142, 199, 229)',
          // fontWeight: 'bold',

          borderRadius:'5px',
          
        },
        startAdornment: (
          <InputAdornment position="start" >
            <SearchIcon style={{color: 'white',fontSize: '23px' }}/>

          </InputAdornment>
        )}}
       />
    </Box>
  );
}