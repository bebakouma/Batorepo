import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


export default function SearchBar() {
  return (
    <Box  
      component="form"
      sx={{  m: 1, width: '40%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#A1E1F5'}}
      noValidate
      autoComplete="off"
    >
      <TextField 
      id="outlined-basic" 
      placeholder="Search by technology or product/service name" 
      variant="outlined" 
      sx={{  width: '100%' }}
      style={{backgroundColor:'#A1E1F5', minHeight: '10px'}}
      InputProps={{
        startAdornment: (
          <InputAdornment position='end' >
            <SearchIcon  />
          </InputAdornment>
        ), style: { fontSize: 20 } }}

        InputLabelProps={{ style: { fontSize: 20 } }}
       />
    </Box>
  );
}