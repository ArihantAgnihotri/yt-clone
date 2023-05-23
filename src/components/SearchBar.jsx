import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Paper, IconButton, Box} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {createTheme} from "@mui/material";
const SearchBar = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 690,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  return (
    <>
    <Paper
        component = "form"
        onSubmit={()=>{}}
        sx={{borderRadius : 20, border : '3px solid red', pl:2, mr : {sm:5}, color:'red',visibility: {md:'visible', xs:'hidden'}}} 
    >
    
        <input 
            className="search-bar" 
            placeholder="Search for a video"
            value=""
            onChange = {()=>{}}
        />
        
        <IconButton type="submit" sx={{ p: '10px', color :'red'}}>
            <SearchIcon style={{color: 'red'}} />
        </IconButton>
    </Paper>
    <IconButton type="submit" size='small' sx={{ p: '20px', color :'red', visibility: {md:'hidden', xs:'visible'}}}>
            <SearchIcon style={{color: 'red'}} />
        </IconButton>
        </>
  )
}

export default SearchBar